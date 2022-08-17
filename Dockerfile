FROM node:16.13.2
WORKDIR /usr/src/vkserver
COPY package.json package-lock.json ./
RUN npm install
#COPY [".", "./"]
COPY ["app.js", "songs.sqlite", "./"]
ADD ["app", "./app/"]
ADD ["public", "./public/"]
ADD ["config", "./config/"]
VOLUME ["/usr/src/vkserver/videos"]
CMD ["npm", "run", "start"]
