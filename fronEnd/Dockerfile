# Stage   1 building  front end  
FROM node:latest-alpine as build
WORKDIR  /app
COPY package*.json ./
RUN npm set progress=off
RUN npm ci 
# We need to pass this argument from the docker compose file  
ARG mode=dev 
ENV NODE_ENV=${mode}
COPY . .
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80001
CMD ["nginx", "-g", "daemon off;"]
