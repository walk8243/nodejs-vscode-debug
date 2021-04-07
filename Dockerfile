FROM node:fermium

ENV NODE_ENV=production

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

CMD [ "npm", "start" ]
