FROM node:19-alpine
EXPOSE 3000
WORKDIR /
COPY ./index.js ./index.js
COPY ./package.json ./package.json
RUN [ "npm", "install" ]
CMD [ "npm", "run", "dev" ]