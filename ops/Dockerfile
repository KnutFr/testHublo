FROM node:16-alpine as base
WORKDIR /opt/api
COPY . .
RUN yarn install
RUN yarn global add prisma
RUN prisma generate
RUN yarn compile
EXPOSE 3000
USER node
CMD yarn start