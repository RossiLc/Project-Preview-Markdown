@echo off
echo Stopping existing containers...
docker-compose down

echo Starting containers...
docker-compose up -d

echo Done! Access the application at http://localhost:3000