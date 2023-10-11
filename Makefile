DOCKER_API_IMAGE_NAME = djangochat/api
DOCKER_FRONTEND_IMAGE_NAME = djangochat/frontend

build: docker-build-api
run-dev-server: docker compose up

docker-build-api:
	docker build \
		-t $(DOCKER_API_IMAGE_NAME) \
		api

# docker-build-frontend:
# 	docker build \
# 		-t ${DOCKER_FRONTEND_IMAGE_NAME} \
# 		frontend