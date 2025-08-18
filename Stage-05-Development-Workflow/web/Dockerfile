# Dev-oriented Next.js image for hot-reload
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
RUN npm install

COPY next.config.mjs next.config.mjs
COPY pages/ pages/
COPY env.example env.example

EXPOSE 3000
CMD ["npm", "run", "dev"]




