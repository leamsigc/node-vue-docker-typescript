FROM node:alpine

# Make the `app` folder the current working directory
WORKDIR /app

# Copy dependency-related files
COPY package.json ./

# Install project dependencies
RUN npm install

COPY . .
