FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

ADD package.json /tmp/package.json

ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml

RUN rm -rf build

RUN cd /tmp && pnpm install

ADD ./ /src

RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npx prisma generate

RUN pnpm build

CMD ["node", "build/src/index.js"]