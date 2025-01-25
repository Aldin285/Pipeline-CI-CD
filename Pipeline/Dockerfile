FROM node:20-alpine
WORKDIR /Pipeline-CI-CD/app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
