FROM node:latest-alpine

# Make the `app` folder the current working directory
WORKDIR /app

# Copy dependency-related files
COPY package.json ./

# Install project dependencies
RUN npm install

COPY . .

# Expose ports 8080, which the dev server will be bound to
CMD ["npm", "run", "serve"]