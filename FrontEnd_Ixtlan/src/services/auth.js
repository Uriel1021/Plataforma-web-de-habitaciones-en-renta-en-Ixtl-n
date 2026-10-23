import {getDB,update,uid,now} from '../core/store.js';
export function activeUser(){return getDB().users.find(u=>u.id===getDB().session.userId)||null;}
export function isAdmin(){return activeUser()?.role==='admin';}
export function isLandlord(){return activeUser()?.role==='landlord';}
export function login(email,password){const user=getDB().users.find(u=>u.email.toLowerCase()===String(email).trim().toLowerCase()&&u.password===password);if(!user)throw Error('Credenciales incorrectas. Revisa el correo y la contraseña de demostración.');update(db=>db.session={role:user.role,userId:user.id});return user;}
export function logout(){update(db=>db.session={role:'visitor',userId:null});}
export function addLandlord(input){if(!isAdmin())throw Error('Solo administración puede registrar arrendadores.');if(getDB().users.some(u=>u.email.toLowerCase()===input.email.toLowerCase()))throw Error('El correo ya está registrado.');if(!input.name||!input.email||!input.password)throw Error('Completa nombre, correo y contraseña.');const user={id:uid('usr'),name:input.name.trim(),email:input.email.trim(),password:input.password,role:'landlord',createdAt:now()};update(db=>db.users.push(user));return user;}
