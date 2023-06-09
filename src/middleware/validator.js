'use strict';

module.exports = (request, response, next) => {
  if (request.params.name === 'name') {
    next();
  } else {
    next('Path params must be name');
  }
};
