FROM node:14-alpine

COPY my-service /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]