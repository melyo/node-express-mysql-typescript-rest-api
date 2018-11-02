#!/bin/bash

if [ ${NODE_ENV} = "production" ]; then
    tslint -c tslint.json 'src/**/*.ts';
    tsc;
    pm2-runtime /home/app/dist/app.js;
else
    nodemon;
fi
