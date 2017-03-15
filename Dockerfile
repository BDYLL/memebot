FROM node:7
MAINTAINER toledo.diego09@gmail.com

RUN mkdir -p /usr/local/memetor
WORKDIR /usr/local/memetor

# Installs npm dependencies here
ADD package.json .
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

# Copy source code
COPY . .

# Run app
EXPOSE 3000
CMD [ "npm", "start" ]
