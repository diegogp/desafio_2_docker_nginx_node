FROM node:16

WORKDIR /app

RUN apt-get update && apt-get install -y wget
#Dockerize verificará se os containers dependencias estão prontos
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package*.json ./
RUN npm install
COPY index.js ./

EXPOSE 3000