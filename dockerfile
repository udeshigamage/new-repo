FROM node:20.10.0-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM nginx:latest

WORKDIR /etc/nginx

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 443