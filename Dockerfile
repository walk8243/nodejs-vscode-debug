FROM node:fermium

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY tsconfig.json .
COPY src/ src/
RUN npm run build-debug

ENV NODE_ENV=production

CMD [ "npm", "start" ]
