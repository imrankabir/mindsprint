# Testing

Run `npm test` with Node.js 20 or newer. The tests use Node's built-in test runner and require no third-party packages. They exercise scoring, game-question generation, streak calculations, storage normalization, and statistics. They do not replace browser-based manual testing.

## Manual checklist

- [ ] Open dashboard, navigate between all five routes, and use browser back/forward.
- [ ] Play each game on Easy, Medium, and Hard; check score and completion screen.
- [ ] Complete all daily games and verify bonus/streak; repeat a completed game on the same day.
- [ ] Test memory matches, mismatches, rapid clicks, and final pair.
- [ ] Test reaction false starts, valid reactions, and keyboard Space.
- [ ] Test theme, text size, high contrast, and reduced motion.
- [ ] Export a backup, reset, import the backup, and verify records return.
- [ ] Try malformed JSON and malformed local storage data.
- [ ] Use keyboard-only navigation and a screen reader if available.
- [ ] Serve on localhost, load once, switch offline in developer tools, reload, and verify the app shell still works.
- [ ] Test narrow mobile viewport, tablet, and desktop layouts.
