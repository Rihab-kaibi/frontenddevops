# Build the Angular app
FROM node:18-alpine AS node
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Serve the app with Nginx
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=node /app/dist/frontend-app /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
