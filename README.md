# Run an postgre sql server with docker.

docker run -p 5432:5432 --name football-api -e POSTGRES_PASSWORD=secret -d postgres
