FROM node:16

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm install -g @nestjs/cli
