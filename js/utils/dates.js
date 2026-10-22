export function localDateKey(date = new Date()) {
  const y = date.getFullYear(), m = String(date.getMonth() + 1).padStart(2, '0'), d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
export function previousDateKey(dateKey) {
  const [y,m,d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d); date.setDate(date.getDate() - 1); return localDateKey(date);
}
export function daysBetweenLocalKeys(earlier, later) {
  const parse = key => { const [y,m,d] = key.split('-').map(Number); return Date.UTC(y,m-1,d); };
  return Math.round((parse(later) - parse(earlier)) / 86400000);
}
