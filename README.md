## Docker Guide for JavaScript Full‑Stack Developers

End‑to‑end, progressive Docker curriculum for React, Next.js, Node.js, and MongoDB across seven stages. Each stage includes a clear explanation, practical code, Dockerfiles, compose files (where applicable), and a README with run instructions.

## Stages
- **[Stage 1 — Basic Containerization](Stage-01-Basic-Containerization/)**: Dockerize a minimal Node.js API with a production‑minded Dockerfile, healthcheck, and example endpoints.
- **[Stage 2 — Multi‑container Setup](Stage-02-Multi-Container/)**: Node.js API + MongoDB with Docker networking, persistent volumes, and init scripts.
- **[Stage 3 — Frontend Integration](Stage-03-Frontend-Integration/)**: Add React/Next.js as separate services; proxy and CORS strategies.
- **[Stage 4 — Optimization](Stage-04-Optimization/)**: Multi‑stage builds, caching strategies, and image size hardening.
- **[Stage 5 — Development Workflow](Stage-05-Development-Workflow/)**: Hot‑reloading, debugging (Node/Chrome DevTools), and local overrides.
- **[Stage 6 — Production Deployment](Stage-06-Production-Deployment/)**: Runtime env vars, secrets, scaling, security best practices.
- **[Stage 7 — Advanced Orchestration](Stage-07-Advanced-Orchestration/)**: Full‑stack compose setup with healthchecks, dependencies, and basic monitoring.

## Quickstart
- Start with Stage 1:
  ```bash
  cd Stage-01-Basic-Containerization
  docker build -t stage1-node-api .
  docker run --rm -p 3000:3000 --env-file env.example stage1-node-api
  # or
  docker compose up --build
  ```

## Notes
- Windows users: ensure Docker Desktop is running.
- Each stage is self‑contained; you can clone and jump straight into any stage.


