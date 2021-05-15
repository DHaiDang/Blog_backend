# Blog_backend

### We have 3 service app, mongodb - mongoose, redis (for storge session):

## How to run : 

- First run Dockerfile ( service app ):
```
docker build -t app/docker:v1 .
```
- Second install node_modules inside container and outside my project becáue folder / is mapping with container app (in other terminal screen but the same dir) : 
```
docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install
```
- Thirst docker-compose :
```
docker compose up
```
* Lưu ý:
Truy cập vào cli mongodb :
```
docker exec -it <id-container_mongodb> /bin/bash
```
```
docker-compose down
docker-compose up

```
