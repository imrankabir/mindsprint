# MindSprint architecture

MindSprint is a static, client-side application. `js/app.js` coordinates routing and rendering; individual game rules live in `js/games/`; score formulas live in `js/scoring.js`; persistence is isolated in `js/storage.js` and state updates in `js/state.js`. The service worker caches the static app shell. No server, account, external API, or analytics service is required for the initial release.

## Persistence and privacy

Scores and preferences are stored in the browser under `mindsprint-data-v1`. Browser storage can be cleared or edited by the device owner, so it must not be treated as trusted evidence for a future online leaderboard. Export/import uses JSON and validates the overall schema.

## Limitations

This version is a personal single-device app. It does not sync across devices, provide accounts, enforce competitive score integrity, or make medical claims. Installable PWA and service worker behaviour require serving the app from localhost or HTTPS; opening `index.html` directly does not provide service-worker caching.
