# Stage 1 — Basic containerization of a Node.js API
# This Dockerfile demonstrates a minimal, production-minded build.

# 1) Use a small base image to reduce size and surface area
FROM node:20-alpine

# 2) Set a working directory inside the container
WORKDIR /app

# 3) Set environment to production for sensible defaults
ENV NODE_ENV=production

# 4) Install only production dependencies
#    - Copy only package manifests first to leverage Docker layer caching
COPY package*.json ./
RUN npm install --omit=dev

# 5) Copy application source code
COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example

# 6) Drop root privileges for better security
#    - Ensure the non-root user owns the app directory
RUN chown -R node:node /app
USER node

# 7) Expose the app port
EXPOSE 3000

# 8) Add a container-native healthcheck
#    - Uses a tiny Node script to avoid installing curl/wget
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node scripts/healthcheck.js || exit 1

# 9) Start the server
CMD ["node", "src/server.js"]


