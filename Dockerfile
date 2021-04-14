FROM node:lts-alpine3.10

RUN mkdir -p usr/src/NonaAnalyticsBack

COPY . /usr/src/NonaAnalyticsBack

WORKDIR /usr/src/NonaAnalyticsBack

ENV CONFIG_ENVIROMENT="production"

ENV CONFIG_SERVER_PORT=3500

ENV DATABASE_URL="postgres://LifeProjectUser:GcRBWSd4zT2r26pW@rds-lakenonacluster-instance-1.c4kx0bmqhjaj.us-east-1.rds.amazonaws.com:5432/prodlifeprojectdatabase"

RUN npm install

EXPOSE 3500

CMD ["npm", "start"]