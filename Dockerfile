# Build the Angular app
FROM node:18-alpine AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Serve the app with Nginx

FROM nginx:alpine
COPY --from=node /app/dist/frontend-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
