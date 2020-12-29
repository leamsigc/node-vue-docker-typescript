# To get this system up and running fallow the next command

## For production just run the fallowing command

```node
docker-compose up -d

```

- The front end is available to check in the port 8080
- The back end is available in the port 8082

#### For local development

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`

> The back end will run the dev script that do the fallowin
> nodemon app.js
> And the front end will run the npm run serve script

> Stop all runing container in the system `docker stop $(docker ps -q)`

> Please if you having problems with the port you can check if the port is in use

```shell
sudo lsof -i -P -n | grep 8005
```

#### In the back end service

> create and .env file and copy paste the env,example and change the values that you need
