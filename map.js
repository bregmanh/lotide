const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word + " hi");



// //TEST CODE
// assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']); // => should PASS
// assertArrayEqual(results2, ["ground hi", "control hi", "to hi", "major hi", "tom hi"]); // => should PASS