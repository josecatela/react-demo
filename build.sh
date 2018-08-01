#!/bin/bash -e

BUILD_DIR="$(dirname "${BASH_SOURCE[0]}")"

pushd ${BUILD_DIR}/client
echo "Building client at $(pwd)..."
npm run lint
CI=true npm test
npm run build
echo "Success."
popd

# TODO: Package client and server into deployable tarball with service installation script
