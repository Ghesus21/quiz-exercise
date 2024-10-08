# quiz-exercise

This quiz-exercise uses docker, webpack, npm, react, react testing library, redux and bootstrap.

To build the project, you need to have Docker installed. (https://docs.docker.com/engine/install/).

Docker is not mandatory, but if you choose not to use Docker, please note that the current Docker image uses the following environment:

/app # node -v
v20.18.0
/app # npm -v
10.8.2

Using Docker:

1. Build the image: docker compose build
2. Start the container: docker compose up

localhost:9000

Running tests inside Docker:
To run the tests in the Docker container, enter the container with the following command:
docker exec -it quiz.exercise.com sh

To run the tests: npm test

Removing Docker image and containers:

1. Stop the container and remove it: docker compose down
2. List all Docker images: docker images -a
3. Find the quiz-exercise_app image ID and remove it: docker rmi <ID of quiz-exercise_app>
