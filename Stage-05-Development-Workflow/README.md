## Stage 5 — Development Workflow (Hot‑reloading, Debugging, Local Overrides)

### What you’ll learn
- Run the full stack for local development with live‑reload
- Debug the Node.js API with the Node inspector
- Use bind mounts and containerized node_modules for fast iterations

### Project structure
```
Stage-05-Development-Workflow/
  ├─ docker-compose.yml
  ├─ api/
  │  ├─ Dockerfile
  │  ├─ .dockerignore
  │  ├─ package.json
  │  ├─ nodemon.json
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

### Ports
- API: host `3000` → container `3000`
- API Node inspector: host `9229` → container `9229`
- Web: host `3001` → container `3000`
- MongoDB: host `27017` → container `27017`

---

## Quickstart (Dev)
```bash
docker compose up --build
```
Open:
- Web: http://localhost:3001
- API: http://localhost:3000/health

Hot‑reload:
- Edit files under `api/src/**` or `web/pages/**` on your host; containers will reload automatically.

Debug API (Node inspector):
- Attach your debugger to `localhost:9229` (protocol: Node.js)

Stop and clean:
```bash
docker compose down -v
```

---

## Notes
- Bind mounts map your working directory into the container, so changes reflect instantly.
- We use a named volume for `/app/node_modules` to avoid clobbering dependencies when mounting the source.
- On some hosts, enabling polling helps file watching. We set `CHOKIDAR_USEPOLLING=1` and `WATCHPACK_POLLING=true` for reliability.




