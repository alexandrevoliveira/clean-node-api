#!/bin/bash

set -o errexit

docker build --no-cache --progress=plain -t alexandrevoliveira/clean-node-api:latest -f ./Dockerfile.dev .
docker run -e CI=true alexandrevoliveira/clean-node-api npm run test:ci
