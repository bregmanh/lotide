const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');
//TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
