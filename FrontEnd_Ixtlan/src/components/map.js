import {getDB} from '../core/store.js';
import {polygonToSvg,project} from '../domain/geo.js';
import {esc,icon} from '../core/helpers.js';
// Mapa esquemático local para probar la aplicación sin APIs ni claves externas.
// El polígono es sintético, NO la cartografía oficial de la localidad.
export function mapView({points=[],focus=null,interactive=false,showPolygon=true,id='mapa',height=350,center=null}={}){
 const polygon=polygonToSvg(getDB().geo.polygon);const pin=(p,index)=>{const pos=project(p.geo||p);return `<g class="map-pin" tabindex="${p.id?0:-1}" ${p.id?`role="button" aria-label="Ver ${esc(p.title)}" data-map-room="${esc(p.id)}"`:''} transform="translate(${pos.x*10} ${pos.y*6.2})"><circle class="map-pin-shadow" r="16"/><circle r="10" fill="${p.id===focus?'#edb47c':'#244e42'}" stroke="#fff" stroke-width="3"/><circle r="2.5" fill="#fff"/></g>`;};
 const cp=center?project(center):null;
 return `<section class="map-shell" style="--map-h:${height}px" id="${id}">
  <div class="map-top"><div><span class="map-dot"></span><strong>Mapa de ubicación</strong><span class="map-note">Esquema interactivo · no cartografía oficial</span></div><label class="map-switch"><input type="checkbox" data-polygon-toggle ${showPolygon?'checked':''}/><span>Mostrar límite</span></label></div>
  <svg class="map-canvas" data-map-canvas ${interactive?'data-center-select="true"':''} viewBox="0 0 1000 620" preserveAspectRatio="none" role="img" aria-label="Mapa esquemático de Ixtlán. Polígono sintético de demostración y marcadores de habitaciones.">
    <rect width="1000" height="620" fill="#e9eee6"/>
    <path d="M-20 180 1020 480M0 455 1000 90M95 0 495 620M700 -20 450 640M-20 330 1020 340M180 -20 260 640M870 -20 680 640" stroke="#fff" stroke-width="34" fill="none" opacity=".92"/>
    <path d="M-20 180 1020 480M0 455 1000 90M95 0 495 620M700 -20 450 640M-20 330 1020 340M180 -20 260 640M870 -20 680 640" stroke="#dae1d6" stroke-width="2" fill="none"/>
    <path d="M55 82h150v94H55zM770 380h155v112H770zM350 410h148v138H350zM750 60h132v150H750z" fill="#d3dfca" opacity=".72" rx="16"/>
    <text x="145" y="130" text-anchor="middle" fill="#859b88" font-size="18" font-family="sans-serif">CENTRO</text>
    <text x="610" y="130" fill="#a1b0a0" font-size="15">IXTLÁN · DEMO</text>
    <polygon class="map-boundary" points="${polygon.split(' ').map(x=>{const [a,b]=x.split(',').map(Number);return `${a*10},${b*6.2}`}).join(' ')}" stroke="#29745d" stroke-width="4" stroke-dasharray="12 7" fill="#6cb391" fill-opacity=".12" ${showPolygon?'':'style="display:none"'}/>
    ${points.map(pin).join('')}
    ${cp?`<g transform="translate(${cp.x*10} ${cp.y*6.2})"><circle r="21" fill="#e7a063" opacity=".3"/><circle r="9" fill="#df8a48" stroke="white" stroke-width="3"/></g>`:''}
  </svg>
  <div class="map-foot"><span>${icon('info',14)} Puntos y calles ilustrativos</span>${interactive?'<span>Haz clic en el mapa para fijar el centro</span>':'<span>Localidad de Ixtlán, Oaxaca</span>'}</div>
 </section>`;
}
export function setupMap(root,handlers={}){root.querySelectorAll('[data-polygon-toggle]').forEach(box=>box.addEventListener('change',()=>{const container=box.closest('.map-shell');container.querySelector('.map-boundary').style.display=box.checked?'':'none';}));root.querySelectorAll('[data-map-room]').forEach(el=>{el.addEventListener('click',()=>handlers.room?.(el.dataset.mapRoom));el.addEventListener('keydown',e=>{if(e.key==='Enter')handlers.room?.(el.dataset.mapRoom);});});root.querySelectorAll('[data-center-select]').forEach(svg=>svg.addEventListener('click',e=>{if(e.target.closest('[data-map-room]'))return;const rect=svg.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width,y=(e.clientY-rect.top)/rect.height;const bounds={minLat:17.316,maxLat:17.349,minLng:-96.508,maxLng:-96.470};handlers.center?.({lat:bounds.maxLat-y*(bounds.maxLat-bounds.minLat),lng:bounds.minLng+x*(bounds.maxLng-bounds.minLng)});}));}
