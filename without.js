const assertArrayEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    return console.log(`😀 Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${arr1}" !== "${arr2}"`);
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

const without = function (sourceArray, itemsToRemove) {
  let removeArray = [];
  let output = [];
 
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      output.push(sourceArray[i]);
    }
  }
  return output;
};

//TEST CODE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArrayEqual(without([1,22,3,4,'5'], [22]), ["1", "2"]);

