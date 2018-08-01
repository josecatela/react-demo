#!/bin/bash -e

BUILD_DIR="$(dirname "${BASH_SOURCE[0]}")"

pushd "${BUILD_DIR}/client"
npm install --save .
popd

pushd "${BUILD_DIR}/server"
npm install --save .
popd
