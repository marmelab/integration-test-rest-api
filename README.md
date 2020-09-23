# Integration test on Node API

This project show how to use [frisby](https://github.com/vlucas/frisby) and [joi](https://github.com/sideway/joi) to test your Node API.

## Prerequisites

- Node 14.x or more
- Yarn 1.x

## Start the API

```sh
yarn # Install the dep

yarn dev # start the API on localhost:3000 in watch mode

yarn start # start the API on localhost:3000 (production)
```

Routes:

```
GET -> / -> Return Hello World

GET -> /users -> Return the list of all users

GET -> /users/:id -> Return the user by this :id
```

## Unit test

```sh
yarn test:unit:watch # Start unit test in watch mode

yarn test:unit # Start unit test, CI command
```

The tests can be found in `./src/**/*.spec.js`

## Integration test

These command start the API in production node (`yarn start`), wait for it to be launched (`start-server-and-test` dependency) and start the integration tests.

```sh
yarn test:integration:watch # Start integration test in watch mode

yarn test:integration:ci # Start integration test, CI command
```

The tests can be found in `./integration-tests/**/*.spec.js`
