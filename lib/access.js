import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
export const COOKIE='northstar_session';
export const SESSION_SECONDS=8*60*60;
const digest=value=>createHash('sha256').update(value).digest();
export function configured(env=process.env){return Boolean(env.ACCESS_PASSWORD?.length>=6&&env.SESSION_SECRET?.length>=32);}
export function validPassword(candidate,env=process.env){return configured(env)&&typeof candidate==='string'&&candidate.length<=256&&timingSafeEqual(digest(candidate),digest(env.ACCESS_PASSWORD));}
const signature=(value,env)=>createHmac('sha256',env.SESSION_SECRET).update(value+'|'+digest(env.ACCESS_PASSWORD).toString('hex')).digest('base64url');
export function issueSession(env=process.env,now=Date.now()){const payload=Buffer.from(JSON.stringify({exp:Math.floor(now/1000)+SESSION_SECONDS,nonce:randomBytes(16).toString('hex')})).toString('base64url');return payload+'.'+signature(payload,env);}
export function validSession(token,env=process.env,now=Date.now()){
  if(!configured(env)||typeof token!=='string'||token.length>512)return false;
  try{const [payload,mac,...rest]=token.split('.');if(!payload||!mac||rest.length)return false;const expected=signature(payload,env);if(mac.length!==expected.length||!timingSafeEqual(Buffer.from(mac),Buffer.from(expected)))return false;const {exp}=JSON.parse(Buffer.from(payload,'base64url').toString());return Number.isSafeInteger(exp)&&exp>Math.floor(now/1000)&&exp<=Math.floor(now/1000)+SESSION_SECONDS;}catch{return false;}
}
export function sessionCookie(value,clear=false){return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${clear?0:SESSION_SECONDS}${process.env.VERCEL||process.env.NODE_ENV==='production'?'; Secure':''}`;}
export function readCookie(header=''){return header.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1)||'';}
