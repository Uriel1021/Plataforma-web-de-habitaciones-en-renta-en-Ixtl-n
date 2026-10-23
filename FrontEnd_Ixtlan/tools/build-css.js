// Regenera CSS a partir de Tailwind CSS v4; solo se necesita npm install si se editan las clases Tailwind.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {compile} from 'tailwindcss';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=[];
async function walk(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await walk(p);else if(/\.(html|js)$/.test(e.name))files.push(p);}}
await walk(root+'/src');files.push(root+'/index.html');
const classes=new Set(['bg-canvas','text-ink','antialiased','flex','grid','hidden','text-2xl','flex-1']);
for(const p of files){const txt=await fs.readFile(p,'utf8');for(const m of txt.matchAll(/\bclass="([^"]+)"/g))for(const c of m[1].split(/\s+/)){if(!c.includes('${')&&c&&/^[\w:/.-]+$/.test(c))classes.add(c);}}
const source='@theme { --color-canvas: #f8f7f4; --color-ink: #1d3732; --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif; } @tailwind utilities;';
const built=await compile(source);const preflight=await fs.readFile(path.resolve(root,'node_modules/tailwindcss/preflight.css'),'utf8');const css=`/*! Tailwind CSS 4.1 · compilado para el prototipo */\n${preflight}\n${built.build([...classes])}`;
await fs.writeFile(root+'/assets/css/tailwind.generated.css',css);console.log(`CSS generado: ${classes.size} candidatos, ${(css.length/1024).toFixed(1)} KB.`);
