FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:single-spa:angular-app

FROM nginx:1-alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html
COPY --from=node /app/nginx/default.conf /etc/nginx/conf.d/default.conf

