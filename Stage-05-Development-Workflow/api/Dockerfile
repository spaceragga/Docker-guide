# Dev-oriented API image with nodemon and inspector
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
RUN npm install && npm install --save-dev nodemon

COPY src/ src/
COPY scripts/ scripts/
COPY env.example env.example
COPY nodemon.json nodemon.json

EXPOSE 3000 9229
CMD ["npm", "run", "dev"]




