const expect = require('chai').expect
const server = require('./../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis is so cool').to.equal('ci with travis is so cool');
  });
});