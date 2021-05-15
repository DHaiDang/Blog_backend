FROM node:13-alpine

WORKDIR /app

COPY . .

RUN npm install

# Development
CMD ["npm", "run", "dev"]

# Chạy production
# RUN npm install -g pm2
# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]