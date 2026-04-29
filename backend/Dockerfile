FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]

RUN echo JWT_EXPIRY=$JWT_EXPIRY \n\
    JWT_SECRET=$JWT_SECRET >> ./.env
