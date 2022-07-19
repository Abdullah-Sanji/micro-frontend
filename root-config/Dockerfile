## base image
#FROM node:14 as node
#
#WORKDIR /app
#
#RUN npm install
#
#COPY . .
#
#CMD ["npm", "run", "start"]
#
#FROM nginx:1-alpine
#COPY --from=node /app/dist /usr/share/nginx/html

# production stage
FROM nginx:stable-alpine as production-stage
COPY index.html /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
