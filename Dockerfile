FROM mhart/alpine-node:11
WORKDIR /srv
COPY package*.json ./
RUN npm install --production
COPY dist .
EXPOSE 5000
ENTRYPOINT node app.js
