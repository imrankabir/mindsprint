export function randomInt(min, max, rng = Math.random) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) throw new RangeError('Expected integer min <= max.');
  return Math.floor(rng() * (max - min + 1)) + min;
}
export function shuffle(items, rng = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}
export function seededRandom(seed) {
  let value = seed >>> 0;
  return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
}
