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

module.exports = flatten;

// //TEST CODE
// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
