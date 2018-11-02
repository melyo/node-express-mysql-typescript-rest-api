FROM keymetrics/pm2:10-alpine
LABEL MAINTAINER Armel Acuna <armel.acuna@yahoo.com>

WORKDIR /home/app

RUN npm install tslint typescript nodemon -g --quiet
