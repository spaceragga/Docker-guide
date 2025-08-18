# Production-optimized API image (multi-stage)

FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm install --omit=dev

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules /app/node_modules
COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example

RUN addgroup -S nodegroup && adduser -S node -G nodegroup && \
    chown -R node:nodegroup /app
USER node

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD node scripts/healthcheck.js || exit 1

CMD ["node", "src/server.js"]


