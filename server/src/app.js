/* eslint no-console: "off" */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const authCheckMiddleware = require('./middleware/authCheck');
const routes = require('./routes/index');
const authRoute = require('./routes/auth');
const newsRoute = require('./routes/news');

require('dotenv').config()

let app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_DB_URL;

mongoose.connect(dbURL, (err) => {
    if (err) {
        console.error("Error connecting to: " + dbURL);
    }
    else {
        console.log("Connected to: " + dbURL);
    }
});

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/user', authRoute);

app.post('/news', authCheckMiddleware);
app.use('/news', newsRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
