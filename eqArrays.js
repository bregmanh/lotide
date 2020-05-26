// FUNCTION IMPLEMENTATION
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
}

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return console.log(`😀 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${actual}" !== "${expected}"`);

  }
};

//TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => returns true
eqArrays([1, 2, 3], [3, 2, 1]) // => returns false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => returns true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => returns false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
