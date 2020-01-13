FROM node:latest

RUN mkdir app

COPY . ./app

CMD ["node", "app.js"]

