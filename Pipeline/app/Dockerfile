FROM node:20-alpine
WORKDIR /app
COPY . /app
RUN npm install --production

CMD ["node", "src/index.js"]