#!/usr/bin/env bash
echo 
"
                  ####        .            
              ### ####       ==            
          ### ### ####      ===            
       /###############\___/ ===        
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===-  
       \______ o          __/            
         \    \        __/             
          \____\______/                
 
          |          |
       __ |  __   __ | _  __   _
      /  \| /  \ /   |/  / _\ | 
      \__/| \__/ \__ |\_ \__  |

"


if [ "$(uname)" == "Darwin" ]; then
    echo 'detect your machine is Macos ~ !'
    docker build -t app/service:v1 .
    docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install
    docker-compose up -d
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo 'detect your machine is Linux ~ !'
    docker build -t app/service:v1 .
    docker run --rm -v $(pwd):/app -w /app node:13-alpine npm install
    docker-compose up -d
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    echo 'detect your machine is Window ~ !'
    docker build -t app/service:v1 .    
    docker run --rm -v "/$(pwd)":/app -w //app node:13-alpine npm install window
    docker-compose up -d
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    echo 'detect your machine is Window'
    docker build -t app/service:v1 .
    docker run --rm -v "/$(pwd)":/app -w //app node:13-alpine npm install window
    docker-compose up -d
fi
