start-client:
	npm run start

start-server:
	npx nodemon --exec babel-node server/index.js --ignore 'tmp/*'

develop:
	npx concurrently "make start-server" "make start-client"

build:
	npm run build

start:
	NODE_ENV="production" make start-server

styleguide:
	npm run styleguide

.PHONY: build
