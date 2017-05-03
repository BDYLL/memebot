// Load variables from .env & Set default node enviroment to development.
require('dotenv').load();

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./routes');
const botPlatforms = require('./app/platforms');

// Connect to db.
config.db.connect();

// Setup server.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// API
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('I am the Memetor Bot server up and running.');
})

// Platform bots

app.use('/bot', botPlatforms)

const server = app.listen(config.env.port);
const host = server.address().address;
const port = server.address().port;
console.log(`=> Memetor Bot running on http://${host}:${port}`);
