import { seededRandom } from '../utils/random.js';
import { localDateKey, previousDateKey } from '../utils/dates.js';
const GAMES=['memory','sequences','reaction','arithmetic','patterns'];
export function createDailyChallenge(date = new Date()) { const key=localDateKey(date);const rng=seededRandom(Number(key.replaceAll('-','')));const pool=[...GAMES];for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}return {date:key,requiredGames:pool.slice(0,3),difficulty:['easy','medium','hard'][Math.floor(rng()*3)]}; }
export function updateStreak(streak, dateKey) { if(streak.lastCompletedDate===dateKey)return {...streak};const yesterday=previousDateKey(dateKey);const current=streak.lastCompletedDate===yesterday?(streak.current||0)+1:1;return {current,longest:Math.max(streak.longest||0,current),lastCompletedDate:dateKey}; }
export function isDailyComplete(dailyRecord, requiredGames) { return requiredGames.every(game=>Boolean(dailyRecord?.completedGames?.includes(game))); }
