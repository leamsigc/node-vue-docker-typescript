# Stage   1 building  front end  
FROM node:alpine as build
WORKDIR  /app
COPY package*.json ./
RUN npm set progress=off
# RUN yarn install
# RUN npm ci 
RUN npm ci  && npm cache clean --force
# We need to pass this argument from the docker compose file  
ARG mode=production 
ENV NODE_ENV=${mode}
COPY . ./
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
