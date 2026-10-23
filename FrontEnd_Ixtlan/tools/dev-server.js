import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.md':'text/markdown; charset=utf-8','.png':'image/png'};
const port=Number(process.env.PORT)||5500;
http.createServer(async(req,res)=>{
  try {
    const url=new URL(req.url,`http://localhost:${port}`);
    const fname=decodeURIComponent(url.pathname);
    const target=path.resolve(root,'.'+(fname==='/'?'/index.html':fname));
    if(!target.startsWith(root+path.sep)&&target!==root) {res.writeHead(403).end('Acceso denegado'); return;}
    const bytes=await fs.readFile(target);
    res.writeHead(200,{'Content-Type':mime[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'}).end(bytes);
  } catch {res.writeHead(404).end('Archivo no encontrado');}
}).listen(port,()=>console.log(`\nEstancia Ixtlán: http://localhost:${port}\nAbre esa dirección en tu navegador. Ctrl+C para detener.\n`));
