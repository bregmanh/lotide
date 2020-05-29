// FUNCTION IMPLEMENTATION
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        let result = eqArrays(arr1[i], arr2[i]);
        if (result === false) {
          return false;
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
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
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => returns true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => returns false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => returns false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
