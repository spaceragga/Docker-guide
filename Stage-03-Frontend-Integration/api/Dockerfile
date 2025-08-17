FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example

RUN chown -R node:node /app
USER node

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
  CMD node scripts/healthcheck.js || exit 1

CMD ["node", "src/server.js"]


