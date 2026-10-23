from pathlib import Path
import math
p=Path(__file__).resolve().parents[1]/'assets/images'
p.mkdir(exist_ok=True)
sets={'amber':('#eddcc5','#d2aa83','#b97d56','#69846e'),'sage':('#dce7d8','#a8bea4','#6e8773','#e1c7a5'),'terra':('#f0d8cb','#d7b09a','#ab7d6a','#86a29a'),'blue':('#dce7e7','#b0c8cd','#6c8fa0','#d0af8b'),'olive':('#e5e4d5','#b8be9a','#86946b','#cfaa8e'),'rose':('#f0e2df','#dcbfbb','#bb9196','#92a49e')}

def room_svg(name,c):
 wall,floor,accent,plant=c
 return f'''<svg xmlns="http://www.w3.org/2000/svg" width="840" height="570" viewBox="0 0 840 570" role="img" aria-label="Ilustración de habitación {name}">
 <defs><linearGradient id="wall" x1="0" y1="0" x2=".5" y2="1"><stop stop-color="{wall}"/><stop offset="1" stop-color="#f7f4ee"/></linearGradient><linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop stop-color="{floor}"/><stop offset="1" stop-color="#a88769"/></linearGradient><linearGradient id="cover" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7f3e9"/><stop offset="1" stop-color="{wall}"/></linearGradient><filter id="shadow"><feGaussianBlur stdDeviation="15"/></filter></defs>
 <rect width="840" height="570" fill="url(#wall)"/><path d="M0 416 840 390 840 570H0Z" fill="url(#floor)"/><path d="M0 416 840 390" stroke="#d8c6b4" stroke-width="8"/>
 <rect x="88" y="65" width="260" height="282" rx="8" fill="#faf6ee"/><rect x="104" y="80" width="228" height="252" fill="#abc8ce"/><path d="M104 238 174 190 225 219 274 155 332 199V332H104Z" fill="#abc2a8"/><path d="M104 269 187 218 249 244 310 201 332 217V332H104Z" fill="#7e9d83"/><path d="M218 80v252M104 208h228" stroke="#fffdf7" stroke-width="14"/><path d="M80 64h17v296H80zM341 64h17v296h-17" fill="#e5d5c4"/>
 <rect x="435" y="92" width="200" height="128" rx="4" fill="#efe7dc" stroke="{accent}" stroke-width="9"/><path d="M478 180c45-90 69-10 116-47" stroke="{accent}" opacity=".7" stroke-width="12" fill="none"/><circle cx="525" cy="138" r="17" fill="{plant}" opacity=".65"/>
 <ellipse cx="455" cy="495" rx="280" ry="45" fill="#453c31" opacity=".14" filter="url(#shadow)"/><path d="M259 315h450v135H259Z" fill="{accent}"/><rect x="235" y="342" width="505" height="138" rx="23" fill="#b68b72"/><rect x="246" y="328" width="490" height="132" rx="22" fill="url(#cover)"/><path d="M245 411c129-6 223 6 488 0v49H245Z" fill="{accent}" opacity=".7"/><rect x="273" y="313" width="130" height="54" rx="19" fill="#f8f5ed"/><rect x="411" y="312" width="122" height="53" rx="18" fill="#e8e0d0"/><path d="M258 457v47M713 457v47" stroke="#86634c" stroke-width="16"/>
 <ellipse cx="744" cy="486" rx="47" ry="13" fill="#453c31" opacity=".16"/><path d="M705 442h74l-13 52h-48Z" fill="#c0a78f"/><path d="M742 446v-96" stroke="#577565" stroke-width="10"/><path d="M740 366c-12-59-53-52-45-13 8 29 34 24 45 13ZM748 358c-9-56 39-60 39-26 0 24-24 29-39 26ZM739 405c-34-53-63-13-36 10 16 14 28 10 36-10ZM749 406c12-60 61-38 48-6-10 27-34 24-48 6Z" fill="{plant}"/>
 <rect x="0" y="0" width="840" height="570" fill="#f6efdf" opacity=".06"/>
 </svg>'''
for k,c in sets.items(): (p/f'room-{k}.svg').write_text(room_svg(k,c),encoding='utf8')
(p/'hero-room.svg').write_text(room_svg('principal',('#e9ddc8','#d0ad8b','#ad866b','#6b9178')).replace('width="840" height="570"','width="1000" height="700"'),encoding='utf8')
(p/'icon.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="17" fill="#274f43"/><path d="M32 11a18 18 0 0 0-18 18c0 13 18 26 18 26s18-13 18-26a18 18 0 0 0-18-18Zm0 25a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#fff5e9"/></svg>''',encoding='utf8')
