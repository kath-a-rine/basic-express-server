'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

//unsure if this is the right place for the object test, should this be in the logger test?
describe('Logger Test', () => {
  describe('Error Handler Tests', () => {
    // test('', async () => {
    //   let response = await mockRequest.get('/person');
    //   expect(response.status).toEqual(500);
    //   expect(response.text).toEqual('No name entered in query. Please enter a name query parameter like this: /person?name=Katharine');
    // });
  });
});
