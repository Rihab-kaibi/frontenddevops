# Build the Angular app
FROM node:18-alpine AS node
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Serve the app with Nginx

FROM nginx:alpine
COPY --from=node /app/dist/crudtuto-Front /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
