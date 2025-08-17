# Simple Next.js runtime for Stage 3 (dev-friendly single-stage)
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY next.config.mjs next.config.mjs
COPY pages/ pages/
COPY env.example env.example

# Build Next.js app
RUN npm run build

RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["npm", "run", "start"]


