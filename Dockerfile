FROM registry.thinknet.co.th/sredev/node:8.9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

RUN yarn build