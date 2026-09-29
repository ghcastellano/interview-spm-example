import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { configured, validPassword, issueSession, validSession, readCookie, sessionCookie } from '../lib/access.js';
import { loginPage } from '../lib/login.js';
const mime={'.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.html':'text/html; charset=utf-8'};
function send(res,status,body,type='text/html; charset=utf-8'){res.statusCode=status;res.setHeader('Content-Type',type);res.end(body);}
function redirect(res,path,cookie){res.statusCode=303;res.setHeader('Location',path);if(cookie)res.setHeader('Set-Cookie',cookie);res.end();}
async function passwordFrom(req){
  if(!String(req.headers['content-type']||'').startsWith('application/x-www-form-urlencoded'))return null;
  if(Number(req.headers['content-length']||0)>2048)return null;
  if(req.body!==undefined){if(typeof req.body==='object')return req.body.password;return new URLSearchParams(String(req.body)).get('password');}
  let body='';for await(const chunk of req){body+=chunk;if(Buffer.byteLength(body)>2048)return null;}return new URLSearchParams(body).get('password');
}
export default async function handler(req,res){
  res.setHeader('Cache-Control','private, no-store, max-age=0');
  res.setHeader('CDN-Cache-Control','no-store');
  res.setHeader('Vercel-CDN-Cache-Control','no-store');
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('X-Frame-Options','DENY');
  res.setHeader('Referrer-Policy','same-origin');
  res.setHeader('X-Robots-Tag','noindex, nofollow');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'");
  if(!configured())return send(res,503,'Access is not configured. Please contact the presentation owner.','text/plain');
  const url=new URL(req.url,'http://localhost');
  const routed=req.query?.path??url.searchParams.get('path');
  let path;
  try{path=routed!=null?'/'+String(routed).replace(/^\/+/, ''):decodeURIComponent(url.pathname);}catch{return send(res,400,'Invalid path','text/plain');}
  if(req.method==='POST'){
    const origin=req.headers.origin;
    const host=req.headers['x-forwarded-host']||req.headers.host;
    if(origin){try{if(new URL(origin).host!==host)return send(res,403,'Invalid origin','text/plain');}catch{return send(res,403,'Invalid origin','text/plain');}}
    if(path==='/logout')return redirect(res,'/',sessionCookie('',true));
    if(path!=='/access')return send(res,405,'Method not allowed','text/plain');
    const password=await passwordFrom(req);
    if(!validPassword(password))return send(res,401,loginPage(true));
    return redirect(res,'/',sessionCookie(issueSession()));
  }
  if(!['GET','HEAD'].includes(req.method))return send(res,405,'Method not allowed','text/plain');
  const authenticated=validSession(readCookie(req.headers.cookie));
  if(!authenticated){
    if(['/','/index.html','/access','/api/gateway'].includes(path))return send(res,200,req.method==='HEAD'?'':loginPage());
    return send(res,401,'Password required','text/plain');
  }
  if(path==='/access')return redirect(res,'/');
  if(path==='/'||path==='/index.html'||path==='/api/gateway')path='/index.html';
  // Only known build outputs may be served. Source files and traversal are never allowed.
  if(!['/index.html','/northstar.svg'].includes(path)&&!/^\/assets\/[A-Za-z0-9_-]+\.(js|css)$/.test(path))return send(res,404,'Not found','text/plain');
  try{const contents=await readFile(resolve(process.cwd(),'client/dist','.'+path));const extension=path.slice(path.lastIndexOf('.'));return send(res,200,req.method==='HEAD'?'':contents,mime[extension]);}catch{return send(res,404,'Not found','text/plain');}
}
