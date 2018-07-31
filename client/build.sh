#!/bin/bash -e

npm run lint
CI=true npm test
npm run build
echo "Success."
