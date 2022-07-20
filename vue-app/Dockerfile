# base image
FROM node:14 as node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]

FROM nginx:1-alpine
COPY --from=node /app/dist /usr/share/nginx/html
COPY --from=node /app/nginx/default.conf /etc/nginx/conf.d/default.conf



