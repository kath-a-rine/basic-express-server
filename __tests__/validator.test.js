'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Validator Test', () => {
  describe('Validator Tests', () => {
    test('500 if no name in query', async () => {
      let response = await mockRequest.get('/person?');
      expect(response.status).toEqual(500);
      expect(response.text).toEqual('No name entered in query. Please enter a name query parameter like this: /person?name=Katharine');
    });
    test('200 if name is in query', async () => {
      let response = await mockRequest.get('/person?name=Katharine'); // what should the route be for 200 test?
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Howdy Katharine');
    });
  });
});
