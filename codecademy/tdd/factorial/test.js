var assert = require("assert");
var Calculate =  require('./index')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('output of 5! is 120', () => {
            const expectedResult = 120;
            const result = Calculate.factorial(5);
            assert.equal(result, expectedResult);
          });
          it('output of 8! is 40320', () => {
            const expectedResult = 40320;
            const result = Calculate.factorial(8);
            assert.equal(result, expectedResult);
          });
          it('output of 0! is 1', () => {
            const expectedResult = 1; 
            const result = Calculate.factorial(0);
            assert.equal(result, expectedResult);
          })
    });
  });