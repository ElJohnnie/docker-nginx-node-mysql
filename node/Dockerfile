FROM node:14 as builder

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]