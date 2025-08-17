# Stage 2 — Node.js API connecting to MongoDB

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# Copy app source
COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example

# Security: run as non-root
RUN chown -R node:node /app
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD node scripts/healthcheck.js || exit 1

CMD ["node", "src/server.js"]


