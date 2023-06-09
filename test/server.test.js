'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  
  it('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('proof of life');
  });

  test('handles success route', async () => {
    const response = await mockRequest.get('/success');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Success!!');

  });

  test('handles bad requests', async () => {
    const response = await mockRequest.get('/bad');
    console.log(response.body);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('Server Error: We have an error!');
  });

  test('handles not found', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);

  });


  test('validate name parameter', async () => {
    let response = await mockRequest.get('/person/stuff');
    expect(response.status).toEqual(500);

    response = await mockRequest.get('/person/name');
    expect(response.status).toEqual(200);
  });

});



