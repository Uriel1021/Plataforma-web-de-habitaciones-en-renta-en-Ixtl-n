import {getDB,update,uid,now} from '../core/store.js';
export function notifyTo(db,userId,title,message,kind='info',roomId=null){db.notifications.unshift({id:uid('not'),userId,title,message,kind,roomId,read:false,createdAt:now()});}
export function unreadFor(userId){return getDB().notifications.filter(n=>n.userId===userId&&!n.read).length;}
export function markRead(id){update(db=>{const n=db.notifications.find(n=>n.id===id);if(n)n.read=true;});}
export function markAllRead(userId){update(db=>db.notifications.filter(n=>n.userId===userId).forEach(n=>n.read=true));}
