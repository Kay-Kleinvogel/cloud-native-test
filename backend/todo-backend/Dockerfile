FROM node:12-alpine3.14

WORKDIR /app

COPY package.json ./

RUN npm install

copy . .

EXPOSE 8080

CMD ["npm","run","dev"]