const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
    describe(".announceDawn", () => {
      it('returns a rooster call', () => {
        const expected = 'cock-a-doodle-doo';
        const announced = Rooster.announceDawn();
        assert.strictEqual(expected, announced);
      })
    })
    describe(".timeAtDawn", () => {
        it('returns its argument as a string', () => {
          const hour = "1";
          const timed = Rooster.timeAtDawn(1);
          assert.strictEqual(hour, timed);
        })
      })
      describe("throws an error if passed", () => {
        it('throws a range error', () => {
          assert.throws(
            () => {
              Rooster.timeAtDawn(-1);
            },
            RangeError
          );
        })
      })
    })