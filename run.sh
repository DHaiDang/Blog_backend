# Script run "Mì ăn liền"
docker build -t app/service:v1 .
docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install
docker-compose up
