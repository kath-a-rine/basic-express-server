'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const validator = require('../src/middleware/validator');
const logger = require('../src/middleware/logger');

const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/person', validator, (req, res) => {
  let { name } = req.query;
  let object = {
    name : name,
  };
  res.status(200).json(object);
});

app.use('*', notFoundHandler);

app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
