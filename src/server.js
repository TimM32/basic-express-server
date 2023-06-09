'use strict';

const express= require ('express');
const cors = require ('cors');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const notFound = require('./error-handles/404');
const errorHandler = require('./error-handles/500');


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);



app.get('/', (request, response, next) => {
  response.status(200).send('Helloo World');
});


app.get('/person', validator, (request, response, next) => {
  response.status(200).json(request.query.name);
});

app.use('*', notFound);
app.use(errorHandler);


const start = (port) => app.listen(port, () => console.log('Port listening is:', port));


module.exports = { start, app };

