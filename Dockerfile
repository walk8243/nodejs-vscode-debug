FROM node:fermium

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY tsconfig.json .
COPY src/ src/
RUN npm run build-debug

CMD [ "npm", "start" ]
