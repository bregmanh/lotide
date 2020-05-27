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

const flatten = function (arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    }else{
      output.push(arr[i]);
    }
  }return output;
};

//TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
