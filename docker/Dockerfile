FROM node:16.18.1-alpine 

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]

