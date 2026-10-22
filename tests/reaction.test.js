import test from 'node:test';import assert from 'node:assert/strict';import {reactionTrialCount,randomDelay} from '../js/games/reaction.js';
test('reaction trial count follows difficulty',()=>{assert.equal(reactionTrialCount('easy'),3);assert.equal(reactionTrialCount('medium'),5);assert.equal(reactionTrialCount('hard'),10);});
test('reaction delay is within configured range',()=>{assert.ok(randomDelay('easy',()=>0)>=1200);assert.ok(randomDelay('easy',()=>0.9999)<=2800);});
