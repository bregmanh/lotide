const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    return console.log(`😀 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${inspect(actual)}" !== "${inspect(actual)}"`);

  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  }
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let output = true;
  if (keys1.length === keys2.length) {
    keys1.forEach(key => {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        output = eqArrays(object1[key], object2[key]);
        if (!output) {
          return output;
        }
      } else if (object1[key] !== object2[key]) {
        output = false;
        return output;
      }
    }); return output;
  } else {
    output = false;
    return output;
  }
};

//TEST CODE:
assertObjectsEqual({ a: '1', b: '2', c: ['3', '2'] }, { a: '1', b: '2', c: ['3', '2'] });
assertObjectsEqual({ a: '1', b: '2', c: '3', d: '4' }, { a: '1', b: '2', c: '3' });
