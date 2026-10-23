import {haversineKm} from './geo.js';
export function normalizeZone(s=''){return String(s).trim().replace(/\s+/g,' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es');}
export function priceError(f){if(f.min!==''&&f.max!==''&&Number(f.min)>Number(f.max))return 'El precio mínimo no puede ser mayor que el máximo.';return '';}
export function filterRooms(rooms,filters={}){const f=filters;return rooms.filter(room=>{
if(f.search&&![room.title,room.zone,room.address].join(' ').toLowerCase().includes(String(f.search).toLowerCase()))return false;
if(f.min!==''&&f.min!=null&&room.price<Number(f.min))return false;
if(f.max!==''&&f.max!=null&&room.price>Number(f.max))return false;
if(f.zones?.length&&!f.zones.some(z=>normalizeZone(z)===normalizeZone(room.zone)))return false;
if(f.availability&&room.availability!==f.availability)return false;
if(f.servicesNone&&room.services.some(s=>s.included))return false;
if(!f.servicesNone&&f.services?.length&&!f.services.some(name=>room.services.some(s=>s.name===name&&s.included)))return false;
if(f.furnishing&&room.furnishing!==f.furnishing)return false;
if(f.bathroom&&room.bathroom!==f.bathroom)return false;
if(f.capacity&&room.capacity<Number(f.capacity))return false;
if(f.center&&f.radius!==''&&f.radius!=null&&!(Number(f.radius)>0&&haversineKm(f.center,room.geo)<=Number(f.radius)+1e-9))return false;
return true;
});}
export function ratingOf(room,reviews){const vals=reviews.filter(r=>r.roomId===room.id&&r.status==='aprobada'&&r.rating!=null).map(r=>Number(r.rating));return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null;}
export function sortRooms(rooms,mode,reviews){return [...rooms].sort((a,b)=>{if(mode==='priceAsc')return a.price-b.price;if(mode==='priceDesc')return b.price-a.price;if(mode==='rating'){const ar=ratingOf(a,reviews),br=ratingOf(b,reviews);return (br??-1)-(ar??-1);}return new Date(b.approvedAt||b.createdAt)-new Date(a.approvedAt||a.createdAt);});}
export function uniqueZones(rooms){return [...new Map(rooms.map(r=>[normalizeZone(r.zone),r.zone])).values()].sort((a,b)=>a.localeCompare(b,'es'));}
