DOCKER_API_IMAGE_NAME = djangochat/api
DOCKER_FRONTEND_IMAGE_NAME = djangochat/frontend

build: build-api
run: migrate-database run-all-containers 

build-api:
	docker build \
		-t $(DOCKER_API_IMAGE_NAME) \
		api

run-all-containers:
	docker compose -f docker-compose.yml -f docker-compose.local.yml up

migrate-database:
	docker compose run api python3 manage.py migrate

# docker-build-frontend:
# 	docker build \
# 		-t ${DOCKER_FRONTEND_IMAGE_NAME} \
# 		frontend