import test from 'node:test';import assert from 'node:assert/strict';import {summarizeSessions,sessionsByDate,bestScoresByGame} from '../js/statistics.js';
test('summary calculates sessions, unique games, score and duration',()=>{assert.deepEqual(summarizeSessions([{game:'memory',score:10,durationSeconds:30},{game:'memory',score:20,durationSeconds:15},{game:'reaction',score:5}]),{sessions:3,games:2,totalScore:35,bestScore:20,totalSeconds:45});});
test('best scores are tracked by game',()=>{assert.deepEqual(bestScoresByGame([{game:'memory',score:10},{game:'memory',score:9},{game:'reaction',score:20}]),{memory:10,reaction:20});});
test('date chart returns requested number of days',()=>{assert.equal(sessionsByDate([],7,new Date(2026,9,20)).length,7);});
