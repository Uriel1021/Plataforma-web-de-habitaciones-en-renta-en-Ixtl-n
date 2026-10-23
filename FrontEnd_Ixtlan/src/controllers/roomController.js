/** Orquesta comandos de anuncios; services/rooms conserva las reglas y permisos de negocio. */
import {createRoom,updateRoom,deleteRoom} from '../services/rooms.js';
export function saveListing(fields,id=null){return id?updateRoom(id,fields):createRoom(fields);}
export function removeListing(id,reason=''){return deleteRoom(id,reason);}
