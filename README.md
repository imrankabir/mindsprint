# MindSprint

Offline-friendly brain-training mini-games made with semantic HTML, CSS, and vanilla JavaScript ES modules.

## Features

- Memory matching, number sequences, reaction-time tests, arithmetic, pattern recognition, and deterministic daily challenges.
- Difficulty settings, scoring, session history, streaks, personal bests, progress chart, accessibility settings, and JSON data backups.
- PWA manifest and service worker for offline use after the first successful load over localhost/HTTPS.
- Node built-in unit tests; no runtime third-party dependencies.

## Run locally

```bash
python3 -m http.server 8080
```

Open http://localhost:8080. For testing, install Node.js 20+ and run:

```bash
npm test
```

The first release is entirely local. Data is stored in this browser only and is not synchronized. See `docs/architecture.md`, `docs/testing.md`, and `docs/deployment.md`.

## Important note

Scores are entertainment and practice statistics, not validated medical or cognitive-health measurements.
