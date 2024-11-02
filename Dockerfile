# Stage 1: Build the Angular application
FROM node:18-alpine as build
WORKDIR /app

COPY package*.json ./


RUN npm install -g @angular/cli@18.2.0

RUN npm install

COPY . .


RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/frontend-app /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]