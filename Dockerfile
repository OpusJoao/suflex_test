FROM node:16-alpine

RUN mkdir app

WORKDIR /app

COPY . . 

RUN cp .env.example .env

EXPOSE 3000

RUN npm install -f