'use strict';

module.exports = (request, response, next) => {
  if (request.query.name) {
    next();
  } else {
    next('Path params must be a name');
  }
};
