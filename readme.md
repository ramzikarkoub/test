### build a docker container

```
docker build -t Repo .
```

### Run the Docker Container

```
docker run -v $(pwd)/logs:/app/logs -p 3000:3000 Repo
```
