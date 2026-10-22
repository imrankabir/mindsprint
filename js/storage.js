import { isRecord } from './utils/validation.js';
export const STORAGE_KEY = 'mindsprint-data-v1';
export const DATA_VERSION = 1;
export function defaultData() { return { version: DATA_VERSION, settings: { difficulty: 'medium', theme: 'dark', textSize: 'normal', highContrast: false, reduceMotion: false, sound: false }, sessions: [], daily: {}, streak: { current: 0, longest: 0, lastCompletedDate: null }, createdAt: new Date().toISOString() }; }
export function normalizeData(value) {
  const base = defaultData(); if (!isRecord(value)) return base;
  const validDifficulty = ['easy','medium','hard'].includes(value.settings?.difficulty) ? value.settings.difficulty : base.settings.difficulty;
  const validTheme = ['dark','light'].includes(value.settings?.theme) ? value.settings.theme : 'dark';
  const textSize = ['normal','large','largest'].includes(value.settings?.textSize) ? value.settings.textSize : 'normal';
  return { version: DATA_VERSION, settings: { ...base.settings, ...(isRecord(value.settings) ? value.settings : {}), difficulty: validDifficulty, theme: validTheme, textSize, highContrast: Boolean(value.settings?.highContrast), reduceMotion: Boolean(value.settings?.reduceMotion), sound: Boolean(value.settings?.sound) }, sessions: Array.isArray(value.sessions) ? value.sessions.filter(s => isRecord(s) && typeof s.game === 'string' && Number.isFinite(s.score)).slice(-2000) : [], daily: isRecord(value.daily) ? value.daily : {}, streak: { ...base.streak, ...(isRecord(value.streak) ? value.streak : {}) }, createdAt: typeof value.createdAt === 'string' ? value.createdAt : base.createdAt };
}
export function loadData(storage = globalThis.localStorage) { try { const raw = storage?.getItem(STORAGE_KEY); return raw ? normalizeData(JSON.parse(raw)) : defaultData(); } catch { return defaultData(); } }
export function saveData(data, storage = globalThis.localStorage) { try { if (!storage) return false; storage.setItem(STORAGE_KEY, JSON.stringify(normalizeData(data))); return true; } catch { return false; } }
export function exportData(data) { return JSON.stringify(normalizeData(data), null, 2); }
export function importData(json) { const parsed = JSON.parse(json); if (!isRecord(parsed) || !Array.isArray(parsed.sessions) || !isRecord(parsed.settings)) throw new TypeError('This file does not look like a valid MindSprint backup.'); return normalizeData(parsed); }
