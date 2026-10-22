import { randomInt } from '../utils/random.js';
export const REACTION_TRIALS={easy:3,medium:5,hard:10};
export function reactionTrialCount(difficulty='medium'){return REACTION_TRIALS[difficulty]??REACTION_TRIALS.medium;}
export function randomDelay(difficulty='medium',rng=Math.random){const ranges={easy:[1200,2800],medium:[1500,3500],hard:[1800,4200]};const [min,max]=ranges[difficulty]??ranges.medium;return randomInt(min,max,rng);}
