# React Demo Tutorial
This is an implementation of Darren Beck's tutorial which begins here:
http://www.darrenbeck.co.uk/nodejs/react/reacttutorial-part1/

# Setup
From a clean clone of this repository, the following steps will get everything up and running.

## MongoDB
* Register a free account at mlab.com
* Create a free database (ex: `react-demo`)
* Create a user in that database (ex: `react-demo-dbuser`)
* Create a file at `server/.env` with the following:
    ```
    PORT = 5000
    MONGO_DB_URL = mongodb://react-demo-dbuser:{PASSWORD}@ds123456.mlab.com:65432/react-demo
    ```

## Server
Open a new terminal at the root of the repository, then:
```sh
cd server
npm install --save .
nodemon src/app.js
```
This will leave an instance of the backend server running which will automatically restart when changes are detected.

## Client
Open a new terminal at the root of the repository, then:
```sh
cd client
npm install .
npm start
```
This will launch the development server and open a browser to the website.

# Additions

## ESLint
In addition to the tutorial, this implementation adds linting. Currently the rules are fairly loose and code-cleanup from the tutorial copy/pasta is ad-hoc. Most of the work so far has been learning how to configure eslint to work with react, jsx, etc. At some point the rules will be made much stricter to include detailed style rules dictating doc comments, spacing, braces, semi-colons, etc.
