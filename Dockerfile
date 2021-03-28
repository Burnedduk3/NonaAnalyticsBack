FROM node:lts-alpine3.10

RUN mkdir -p usr/src/NonaAnalyticsBack

COPY . /usr/src/NonaAnalyticsBack

WORKDIR /usr/src/NonaAnalyticsBack

ENV CONFIG_ENVIROMENT=Production

ENV CONFIG_SERVER_PORT=3500

ENV CONFIG_DATABASE_URL="postgres://postgres:Patipuna1@127.0.0.1:5432/test"

RUN npm install

EXPOSE 3500

CMD ["npm", "start"]