FROM node:20.18-alpine
WORKDIR /app
COPY ./app/package.json ./
COPY ./app/package-lock.json ./
RUN npm install
COPY . .
EXPOSE 9000