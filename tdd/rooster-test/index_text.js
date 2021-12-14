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
