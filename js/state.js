import { loadData, saveData } from './storage.js';
let data=loadData();const listeners=new Set();
export function getData(){return data;}
export function subscribe(listener){listeners.add(listener);return()=>listeners.delete(listener);}
function publish(){saveData(data);for(const listener of listeners)listener(data);}
export function updateData(updater){data=updater(structuredClone(data));publish();return data;}
export function replaceData(next){data=next;publish();}
export function addSession(session){updateData(d=>({...d,sessions:[...d.sessions,{...session,id:session.id??`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}].slice(-2000)}));}
export function setSettings(patch){updateData(d=>({...d,settings:{...d.settings,...patch}}));}
