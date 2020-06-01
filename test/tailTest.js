const assert = require('chai').assert;
const tail = require('../tail');

// Test Case
describe("#tail", () => {
  it("returns ['Lighthouse','Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});

