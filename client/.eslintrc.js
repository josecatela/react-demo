module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "15.0", // React version, default to the latest React stable release
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                       // propTypes object, e.g. `forbidExtraProps`.
                                                       // If this isn't set, any propTypes wrapped in
                                                       // a function will be skipped.
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }
};