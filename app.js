const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.Bookmarks(app)
routes.Users(app);
routes.Index(app);

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port, () => console.log('server started'));
module.exports = app;
