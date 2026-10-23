import {makeSeed} from '../data/seed.js';
import {KEY} from '../domain/constants.js';
function load(){try{const obj=JSON.parse(localStorage.getItem(KEY));if(obj&&obj.rooms&&obj.users&&obj.geo)return obj;}catch{}return makeSeed();}
let db=load();
const subscribers=new Set();
export function getDB(){return db;}
export function update(mutator){const next=structuredClone(db);mutator(next);db=next;localStorage.setItem(KEY,JSON.stringify(db));subscribers.forEach(fn=>fn(db));return db;}
export function subscribe(fn){subscribers.add(fn);return()=>subscribers.delete(fn);}
export function resetDemo(){db=makeSeed();localStorage.setItem(KEY,JSON.stringify(db));subscribers.forEach(fn=>fn(db));}
export const uid=(prefix='id')=>`${prefix}-${globalThis.crypto?.randomUUID?.()||Math.random().toString(36).slice(2)}`;
export const now=()=>new Date().toISOString();
