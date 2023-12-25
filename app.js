const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const bodyParser = require('body-parser')
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false

}));
app.use(cors());
app.use(bodyParser.json({ limit: '50Mb' }));
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }))


module.exports = app;