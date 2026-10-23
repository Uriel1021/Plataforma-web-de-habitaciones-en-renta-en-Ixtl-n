/** Controlador de consultas públicas. La vista desconoce cómo se validan o combinan reglas. */
import {getDB} from '../core/store.js';
import {publicRooms} from '../services/rooms.js';
import {filterRooms,sortRooms,priceError,uniqueZones} from '../domain/filters.js';
export function catalogSnapshot(filters){const err=priceError(filters);const visible=publicRooms();return {error:err,rooms:err?[]:sortRooms(filterRooms(visible,filters),filters.sort,getDB().reviews),zones:uniqueZones(visible)};}
