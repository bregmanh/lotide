

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
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

const assertArrayEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    return console.log(`😀 Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${arr1}" !== "${arr2}"`);

  }
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + " hi");

//TEST CODE
assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']); // => should PASS
assertArrayEqual(results2, ["ground hi", "control hi", "to hi", "major hi", "tom hi"]); // => should PASS