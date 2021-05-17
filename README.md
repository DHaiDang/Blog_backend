# Blog_backend

### We have 3 service app, mongodb - mongoose, redis (for storge session):

## How to run : 
Cách 1 : 
```
sudo chmod +x run.sh
./run.sh
```
Cách 2 (Build tay):
- First run Dockerfile ( service app ):
```
docker build -t app/service:v1 .
```
- Second install node_modules inside container and outside my project becáue folder / is mapping with container app (in other terminal screen but the same dir) : 
```
docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install
```
Giải thích :
- Ở câu lệnh trên ta chạy câu lệnh docker tạo ra 1 container với option --rm là container chạy xong sẽ tự xoá
- -v là volumn. Ánh xạ đường dẫn $(pwd):/app ở folder gốc vào đường dẫn /app ở trong Image - mount
- -w là WORKDIR
- node:13-alpine: tương đương với FROM:node:13-alpine
- lệnh chạy và install npm

- Thirst docker-compose :
```
docker compose up
```
* Lưu ý:
Truy cập vào cli mongodb :
```
docker exec -it <id-container_mongodb> /bin/bash
```
Sau khi vào được container-mongodb : 
```
mongo
```
Vài câu lệnh check db trong mongodb-cli:
```
show dbs
use <db_name>
show collections
```
also see : https://docs.mongodb.com/manual/reference/mongo-shell/
Hoặc dùng flag --eval
```
mongo --eval "printjson(db.serverStatus())"
```
also see : https://stackoverflow.com/questions/4837673/how-to-execute-mongo-commands-through-shell-scripts
Khởi động lại sau khi config file docker-compose.yml và Dockerfile
```
docker-compose down
docker-compose up
```

* Dừng tất cả các container và xoá hết images :
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a)
```

### run
```
localhost:3000
```
