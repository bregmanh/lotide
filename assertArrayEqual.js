const eqArrays = require('./eqArrays');
//Function that asserts - outputs the result of the test - to check if two arrays are equal

const assertArrayEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    return console.log(`😀 Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${arr1}" !== "${arr2}"`);

  }
};

module.exports = assertArrayEqual;