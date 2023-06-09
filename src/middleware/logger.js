'use strict';

const logger = (request, response, next) => {
  console.log('Middleware logger');
  next();
};

module.exports = logger;
