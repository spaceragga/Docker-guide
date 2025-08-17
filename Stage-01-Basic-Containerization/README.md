## Stage 1 — Basic Containerization (Node.js API)

### What you’ll learn
- **Containerize** a minimal Node.js HTTP API with a production-friendly Dockerfile
- **Build and run** the image locally with Docker and with Docker Compose
- **Verify** the container via a simple health endpoint

### Project structure
```
Stage-01-Basic-Containerization/
  ├─ Dockerfile
  ├─ docker-compose.yml
  ├─ .dockerignore
  ├─ package.json
  ├─ env.example
  ├─ scripts/
  │  └─ healthcheck.js
  └─ src/
     ├─ server.js
     ├─ config.js
     └─ routes/
        ├─ health.js
        └─ products.js
```

### API overview
- `GET /health`: liveness probe (uptime, memory, timestamp)
- `GET /products`: example business endpoint returning mock products
- `GET /env`: show selected environment config

---

## Quickstart

### 1) Build the image
```bash
docker build -t stage1-node-api .
```

### 2) Run the container
```bash
docker run --rm -p 3000:3000 --env-file env.example stage1-node-api
```

### 3) Test the API
```bash
curl http://localhost:3000/health
curl http://localhost:3000/products
curl http://localhost:3000/env
```

You should see JSON responses.

---

## Using Docker Compose (optional but handy)
```bash
docker compose up --build
```
Then hit the same endpoints on `http://localhost:3000`.

Stop with `Ctrl+C`, and clean up with:
```bash
docker compose down -v
```

---

## Local (non-Docker) run
```bash
npm install
npm start
```

---

## How this Dockerfile is production-friendly
- Uses a **small base image** (`node:20-alpine`)
- **Only installs production deps** (`npm install --omit=dev`)
- Runs as a **non-root user**
- Has a **HEALTHCHECK** that hits `/health`

---

## Common pitfalls
- If port 3000 is already used, change `PORT` in `env.example` and adjust your `-p` mapping.
- If your corporate proxy interferes, ensure Docker has proxy env vars configured or build without the network restrictions.

---

## Next step
Proceed to Stage 2 to add MongoDB and Docker networking.


