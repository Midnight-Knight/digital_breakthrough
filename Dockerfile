FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["sh", "-c","npm run build && npm run start"]