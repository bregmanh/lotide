
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

module.exports = without;

// //TEST CODE
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// assertArrayEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArrayEqual(without([1,22,3,4,'5'], [22]), ["1", "2"]);

