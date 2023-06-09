'use strict';

const logger = (request, response, next) => {
  console.log({
    method: request.method,
    path: request.path,
  });
  next();
};

module.exports = logger;
