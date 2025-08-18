## Stage 4 — Optimization (Multi‑stage Builds, Layering, Caching)

### What you’ll learn
- Use multi‑stage Docker builds for smaller, more secure images
- Apply proper layer ordering and `.dockerignore` to improve cache hits
- Use BuildKit cache mounts to speed up dependency installs
- Ship a minimal Next.js runtime using the standalone output

### Project structure
```
Stage-04-Optimization/
  ├─ docker-compose.yml
  ├─ api/
  │  ├─ Dockerfile
  │  ├─ .dockerignore
  │  ├─ package.json
  │  ├─ env.example
  │  ├─ scripts/
  │  │  └─ healthcheck.js
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

### Key optimizations
- Multi‑stage builds separate dependency install/build from the runtime image
- Cache mounts for faster `npm install` between builds
- Copy minimal artifacts into the final runtime image
- Non‑root user, healthchecks, and small base images

---

## Quickstart
```bash
docker compose up --build
```
App: `http://localhost:3001`

Optional seed:
```bash
docker compose exec api node -e "console.log('No seed stage here; use Stage 3 seed or POST /products')"
```

Verify:
```bash
curl http://localhost:3000/health
curl http://localhost:3000/products
curl http://localhost:3001/api/products
```

Stop and clean:
```bash
docker compose down -v
```

---

## Notes
- BuildKit is required for cache mounts. Docker Desktop enables it by default.
- If you modify `package.json`, dependency layers will rebuild; app code changes will reuse dependency cache.


