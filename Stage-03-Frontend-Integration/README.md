## Stage 3 — Frontend Integration (Next.js + Node.js API + MongoDB)

### What you’ll learn
- Add a Next.js frontend service that consumes the API
- Use service-to-service networking in Docker Compose
- Avoid CORS in the browser by proxying API calls through Next.js API routes

### Project structure
```
Stage-03-Frontend-Integration/
  ├─ docker-compose.yml
  ├─ api/
  │  ├─ Dockerfile
  │  ├─ .dockerignore
  │  ├─ package.json
  │  ├─ env.example
  │  ├─ scripts/
  │  │  ├─ healthcheck.js
  │  │  └─ seed.js
  │  └─ src/
  │     ├─ server.js
  │     ├─ config.js
  │     ├─ db.js
  │     └─ routes/
  │        ├─ health.js
  │        └─ products.js
  └─ web/
     ├─ Dockerfile
     ├─ .dockerignore
     ├─ package.json
     ├─ env.example
     ├─ next.config.mjs
     └─ pages/
        ├─ index.js
        └─ api/
           └─ products.js
```

### Ports
- Web (Next.js): host `3001` → container `3000`
- API (Node): host `3000` → container `3000`
- MongoDB: host `27017` → container `27017` (optional exposure)

---

## Quickstart
```bash
docker compose up --build
```
App: `http://localhost:3001`

Optional seed:
```bash
docker compose exec api node scripts/seed.js
```

Test API via browser hitting the web proxy:
- `http://localhost:3001/api/products`

Stop and clean:
```bash
docker compose down -v
```

---

## How it works
- The browser calls Next.js route `/api/products`, which proxies to the API service (`http://api:3000/products`).
- Server-side rendering on `/` also fetches from the API using the internal service DNS name `api`.
- No CORS issues because the browser only talks to the web origin.

---

## Next step
Proceed to Stage 4 for multi‑stage builds, caching, and image size optimization for both services.


