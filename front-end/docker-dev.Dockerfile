FROM node:15-alpine

# Make the `app` folder the current working directory
WORKDIR /usr/front-end

# Copy dependency-related files
COPY package.json ./

# Install project dependencies
RUN npm install

COPY . .
