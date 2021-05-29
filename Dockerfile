FROM node:16.2.0-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]