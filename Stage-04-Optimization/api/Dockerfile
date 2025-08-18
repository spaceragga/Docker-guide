# Multi-stage build for Node.js API (smaller, faster, safer)

# ---------- Base deps layer (only package manifests) ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Use BuildKit cache mount for npm cache. If you add a lockfile, switch to `npm ci`.
RUN --mount=type=cache,target=/root/.npm npm install --omit=dev

# ---------- Runtime image ----------
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules /app/node_modules

# Copy only app source (keeps layers small when code changes)
COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example

# Security: non-root
RUN chown -R node:node /app
USER node

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD node scripts/healthcheck.js || exit 1

CMD ["node", "src/server.js"]


