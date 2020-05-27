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

//TEST CODE
const result1 = letterPositions("lighthouse in the house");

assertArrayEqual(result1["l"], [0]); // => should PASS
assertArrayEqual(result1["u"], [7, 20]);


