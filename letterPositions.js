const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  sentenceArray = sentence.split('');
  sentenceArray.forEach(function (letter, index) {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      if (letter !== " ") {
        results[letter] = [index];
      }

    }
  })
  return results;
};

module.exports = letterPositions;

// //TEST CODE
// const result1 = letterPositions("lighthouse in the house");

// assertArrayEqual(result1["l"], [0]); // => should PASS
// assertArrayEqual(result1["u"], [7, 20]);


