FROM mhart/alpine-node:11
WORKDIR /srv
COPY package*.json ./
RUN npm install tslint typescript nodemon -g&& \
npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
