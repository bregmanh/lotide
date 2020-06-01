const assert = require('chai').assert;
const middle = require('../middle');

//TEST CODE
describe("#assertArrayEqualTest", () => {
  it("returns pass when comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });

  it("returns pass when comparing middle([1, 2, 3]) and [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns pass when comparing middle([1, 2, 3, 4]) and [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});


