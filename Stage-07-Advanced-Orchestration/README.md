## Stage 7 — Advanced Orchestration (Full‑stack + Monitoring)

### What you’ll learn
- Orchestrate the full stack (web + api + mongo) with a monitoring stack
- Export Prometheus metrics from the API and scrape them
- Visualize metrics in Grafana and view container logs in Dozzle

### Project structure
```
Stage-07-Advanced-Orchestration/
  ├─ docker-compose.yml
  ├─ prometheus/
  │  └─ prometheus.yml
  ├─ grafana/
  │  └─ provisioning/
  │     └─ datasources/
  │        └─ datasource.yml
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
  │     ├─ metrics.js
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

### Ports
- Web: http://localhost:3001
- API: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3002 (admin/admin by default)
- Dozzle (logs): http://localhost:9999

---

## Quickstart
```bash
docker compose up --build -d
```

Then:
- Open Grafana → add dashboard or explore → Prometheus datasource is pre‑provisioned
- Explore Prometheus at http://localhost:9090 and try `up` or `http_requests_total`
- View live logs in Dozzle: http://localhost:9999

Stop/clean:
```bash
docker compose down -v
```

---

## Notes
- On some hosts, cAdvisor and Dozzle require access to the Docker socket and host mounts. Docker Desktop typically supports this.
- The API exposes `/metrics` (Prometheus format) using `prom-client` and basic HTTP counters.


