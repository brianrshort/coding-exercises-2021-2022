var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('output of 5! is 120', () => {
            const expectedResult = 120;
            const result = Calculate.factorial(5);
            assert.equal(result, expectedResult);
          });

    });
  });