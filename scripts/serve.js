import { createServer } from 'node:http';
import handler from '../api/gateway.js';
const port=Number(process.env.PORT||4174);
createServer((req,res)=>handler(req,res).catch(()=>{res.statusCode=500;res.end('Unable to serve this request.');})).listen(port,'127.0.0.1',()=>console.log(`Protected dashboard: http://127.0.0.1:${port}`));
