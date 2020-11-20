FROM google/cloud-sdk

RUN pkg install node

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

CMD [ "node", "index.js" ]
