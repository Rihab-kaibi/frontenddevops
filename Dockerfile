# Stage 1: Build the Angular application
FROM node:18-alpine as build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build --prod



FROM nginx:alpine

COPY --from=build /app/dist/frontend-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
