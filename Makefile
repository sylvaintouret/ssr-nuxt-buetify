setup:
	cd frontend && yarn

develop: setup
	cd frontend && yarn dev

dockerize: setup
	cd frontend && yarn build
	docker-compose down && \
	docker-compose up --build

