import {DEMO_POLYGON} from '../domain/constants.js';
const roomsSeed=[
 ['Un rincón tranquilo con luz natural','Centro',2300,'Disponible','Amueblada','Privado',2,17.3330,-96.4880,'Habitación luminosa con escritorio y entrada independiente. Ideal para estudiar o trabajar.','amber'],
 ['Estudio acogedor cerca del mercado','Centro',1850,'Disponible','Parcialmente amueblada','Compartido',1,17.3314,-96.4905,'Espacio práctico y cómodo, a unos pasos de servicios cotidianos.','sage'],
 ['Habitación con patio interior','Barrio La Asunción',2600,'Disponible','Amueblada','Privado',2,17.3372,-96.4856,'Ambiente sereno, ventilación natural y patio compartido.','terra'],
 ['Espacio sencillo para una persona','Barrio San Pedro',1300,'Rentada','Sin amueblar','Compartido',1,17.3294,-96.4932,'Opción funcional en una calle tranquila.','blue'],
 ['Habitación amplia con cocina','Barrio La Asunción',3100,'Disponible','Amueblada','Privado',3,17.3378,-96.4890,'Espacio amplio con acceso a cocina y lavandería.','olive'],
 ['Cuarto luminoso con balcón','Zona Centro',2700,'Disponible','Parcialmente amueblada','Privado',2,17.3306,-96.4832,'Balcón con vista al exterior y excelente entrada de luz.','rose'],
 ['Habitación para estancia larga','Barrio San Pedro',2000,'Rentada','Amueblada','Compartido',2,17.3268,-96.4891,'Ambiente práctico para estancias prolongadas.','sage'],
 ['Espacio compacto con servicios','Centro',1650,'Disponible','Sin amueblar','Compartido',1,17.3345,-96.4922,'Distribución sencilla con servicios básicos incluidos.','blue'],
 ['Habitación cómoda con jardín','Barrio La Asunción',2900,'Disponible','Amueblada','Privado',2,17.3380,-96.4821,'Acceso a un pequeño jardín compartido y buen espacio de almacenamiento.','amber']
];
const servicesSets=[['Agua','Electricidad','Internet / Wi-Fi','Acceso a cocina'],['Agua','Electricidad','Internet / Wi-Fi'],['Agua','Electricidad','Áreas comunes','Seguridad o vigilancia'],[],['Agua','Electricidad','Internet / Wi-Fi','Acceso a cocina','Lavandería'],['Agua','Internet / Wi-Fi','Áreas comunes'],['Agua','Electricidad'],['Agua','Electricidad'],['Agua','Electricidad','Internet / Wi-Fi','Áreas comunes']];
export function makeSeed(){return{
 session:{role:'visitor',userId:null},
 users:[{id:'ad1',name:'Administrador demo',email:'admin@demo.test',password:'admin123',role:'admin'},{id:'u1',name:'María López',email:'maria@demo.test',password:'demo123',role:'landlord'},{id:'u2',name:'Carlos Ruiz',email:'carlos@demo.test',password:'demo123',role:'landlord'}],
 rooms:roomsSeed.map((r,i)=>({id:`hab-${i+1}`,ownerId:i<5?'u1':'u2',title:r[0],zone:r[1],price:r[2],availability:r[3],furnishing:r[4],bathroom:r[5],capacity:r[6],geo:{lat:r[7],lng:r[8]},address:`Calle de demostración ${12+i*3}, ${r[1]}, Ixtlán, Oaxaca`,description:r[9],theme:r[10],images:[r[10]],services:servicesSets[i].map(name=>({name,included:true,fee:0})),otherServices:[],contact:'951 000 0000',approved:true,published:true,geoStatus:'validada',pendingGeo:null,createdAt:new Date(2026,8,18+i).toISOString(),approvedAt:new Date(2026,9,2+i).toISOString()})),
 reviews:[{id:'rev1',roomId:'hab-1',alias:'Visitante',comment:'Buena iluminación y ambiente tranquilo.',rating:5,status:'aprobada',createdAt:'2026-10-07'},{id:'rev2',roomId:'hab-1',alias:'Ana',comment:'La ubicación me pareció cómoda.',rating:4,status:'aprobada',createdAt:'2026-10-11'},{id:'rev3',roomId:'hab-3',alias:'Huésped',comment:'Muy agradable.',rating:5,status:'aprobada',createdAt:'2026-10-15'},{id:'rev4',roomId:'hab-2',alias:'Visitante',comment:'Quiero consultar disponibilidad.',rating:null,status:'pendiente',createdAt:'2026-10-19'}],
 appeals:[],notifications:[],audit:[],abuse:{},geo:{polygon:[...DEMO_POLYGON],version:1,history:[{version:1,kind:'Manual',reason:'Polígono sintético inicial de demostración',date:'2026-10-01',admin:'Sistema demo',polygon:[...DEMO_POLYGON],source:null}],serviceOnline:true},
};}
