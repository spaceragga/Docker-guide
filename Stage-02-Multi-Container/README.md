## Stage 2 — Multi‑container Setup (Node.js API + MongoDB)

### What you’ll learn
- Run a Node.js API and MongoDB as separate containers using Docker Compose
- Use container networking to connect services via service names
- Persist database data with a Docker named volume
- Gate API startup on MongoDB health using healthchecks

### Project structure
```
Stage-02-Multi-Container/
  ├─ Dockerfile
  ├─ docker-compose.yml
  ├─ .dockerignore
  ├─ package.json
  ├─ env.example
  ├─ scripts/
  │  ├─ healthcheck.js
  │  └─ seed.js
  └─ src/
     ├─ server.js
     ├─ config.js
     ├─ db.js
     └─ routes/
        ├─ health.js
        └─ products.js
```

### API overview
- `GET /health`: app + DB liveness
- `GET /products`: list products (from MongoDB)
- `POST /products`: create a product `{ name, price, currency }`

---

## Quickstart

### 1) Bring up the stack
```bash
docker compose up --build
```
This starts two services: `mongo` and `api`.

### 2) Seed some data (optional)
```bash
docker compose exec api node scripts/seed.js
```

### 3) Test the API
```bash
curl http://localhost:3000/health
curl http://localhost:3000/products
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Acme Hammer","price":19.99,"currency":"USD"}'
```

Stop with `Ctrl+C`, and clean up with:
```bash
docker compose down -v
```

---

## How it works
- The API connects to MongoDB via the Compose service name `mongo`
- MongoDB data persists in a named volume `mongo_data`
- Compose waits for MongoDB to be healthy (ping) before starting the API

---

## Common pitfalls
- If port 3000 is busy, change `PORT` in `env.example` and update the host port mapping in `docker-compose.yml`.
- On Windows, ensure Docker Desktop is running before `docker compose up`.

---

## Next step
Proceed to Stage 3 to add a React/Next.js frontend and wire it to this API.


