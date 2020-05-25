// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`😀 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${actual}" !== "${expected}"`);

  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
