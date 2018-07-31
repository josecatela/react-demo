#!/bin/sh

npm run lint     || ( echo "Failed: lint"  ; exit 1 )
CI=true npm test || ( echo "Failed: test"  ; exit 1 )
npm run build    || ( echo "Failed: build" ; exit 1 )
echo "Success."
