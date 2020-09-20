FROM node:12

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .
COPY wait-for-it.sh .

# ENTRYPOINT node app.js
