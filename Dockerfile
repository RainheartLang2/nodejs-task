FROM node:9-slim
COPY . ./app
WORKDIR /app
RUN npm i
CMD npm build
CMD npm start
EXPOSE 3000