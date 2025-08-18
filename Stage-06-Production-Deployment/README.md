## Stage 6 — Production Deployment (Env Vars, Scaling, Security)

### What you’ll learn
- Configure production‑grade images and compose settings
- Manage environment variables and secrets
- Scale stateless services and set resource limits
- Apply security hardening (non‑root, read‑only FS, drop capabilities, no‑new‑privileges)

### Project structure
```
Stage-06-Production-Deployment/
  ├─ docker-compose.yml
  ├─ secrets/
  │  └─ app_secret.txt (placeholder; create your own)
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
           ├─ products.js
           └─ health.js
```

### Defaults
- Web (Next.js): host `3001` → container `3000`
- API (Node): host `3000` → container `3000`
- MongoDB: internal only (no host port exposed)

---

## Quickstart (Prod)
1) Create a secret file for the API (example content shown; replace!):
```bash
echo "change-me-in-prod" > secrets/app_secret.txt
```

2) Bring up the stack:
```bash
docker compose up -d --build
```

3) Test:
```bash
curl http://localhost:3000/health
curl http://localhost:3000/products
curl http://localhost:3001/api/products
```

4) Scale stateless services (example: 3 API replicas):
```bash
docker compose up -d --scale api=3
```

5) Stop and clean:
```bash
docker compose down -v
```

---

## Security hardening applied
- Non‑root users in images
- `read_only: true` filesystems for `api` and `web` with tmpfs for `/tmp`
- `cap_drop: [ALL]` and `no-new-privileges` security option
- MongoDB not exposed to host network
- Minimal images and healthchecks

---

## Notes
- Use real secrets in `secrets/app_secret.txt`. Never commit real secrets.
- Resource limits (`deploy.resources`) are included for documentation. They’re applied in Swarm. With plain Compose, prefer host‑level limits or `docker run` constraints; you can still use `--cpus`/`--memory` via CLI in some setups.
- For TLS/edge routing, use a reverse proxy (e.g., Traefik or Nginx) in front; see Stage 7 for orchestration add‑ons.


