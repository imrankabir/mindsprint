export function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
export function clampNumber(value, min, max, fallback = min) { const n = Number(value); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback; }
export function safeText(value, max = 200) { return String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max); }
