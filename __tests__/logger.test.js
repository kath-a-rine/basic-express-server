'use strict';

const logger = require('../src/middleware/logger');

describe('Test logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Properly logs output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test('Properly calls next()', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  })
});
