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

const assertArrayEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    return console.log(`😀 Assertion Passed: "${arr1}" === "${arr2}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${arr1}" !== "${arr2}"`);

  }
};

const middle = function (arr) {
  let middleIndex;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    //middleIndex = [arr.length / 2 - 1, (arr.length + 1) / 2];
    return [arr[arr.length / 2 - 1], arr[(arr.length) / 2]];
  } else {
    middleIndex = (arr.length - 1) / 2;
    return [arr[middleIndex]];
  }
}

//TEST CODE
assertArrayEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
