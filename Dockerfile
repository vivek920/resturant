FROM node:14
WORKDIR /vivek/creating/random
COPY . .
RUN npm install
CMD ["npm", "start"]
