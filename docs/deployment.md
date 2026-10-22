# Local use and deployment

## Local development

Requires Node.js 20+ for tests. Because the app uses ES modules and a service worker, serve it over localhost or HTTPS rather than opening the HTML file directly.

A simple option is Python's built-in static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. Alternatively, use the included dependency-free Node server: `npm run serve`. It binds to localhost on port 8080 by default; set `PORT` to change the port.

## Static hosting

Upload the complete directory to any static host that supports HTTPS, such as GitHub Pages, Cloudflare Pages, or Netlify. Use the repository root as the publish directory. Service workers require HTTPS except on localhost. Test the deployed base path because this project uses relative asset paths.

## Operations

No backend logs or database backups exist in this static version. Export local JSON backups regularly. For future accounts or leaderboards, add a server API, database migrations, authorization, rate limiting, server-side score validation, logging, backups, and a privacy policy before launch.
