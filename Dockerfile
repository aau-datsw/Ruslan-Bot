FROM node:14.11.0

# Create app directory
WORKDIR /usr/src/app

# add src files into docker image
ADD src ./
RUN ls -la

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied into the docker machine
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

# RUN npm ci --only=production
RUN npm ci --only=production

CMD [ "node", "bot.js" ]