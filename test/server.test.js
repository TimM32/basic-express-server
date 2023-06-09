'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {

  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('Helloo World');
  });

  test('handles person get request', async () => {
    const response = await mockRequest.get('/person?name=Lucky');
    console.log(response);
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('"Lucky"');
  });

  test('handles not found', async () => {
    let response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);

    response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  });


  test('validate name query parameter', async () => {
    let response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);

    response = await mockRequest.get('/person?name=something');
    expect(response.status).toEqual(200);
  });

});



