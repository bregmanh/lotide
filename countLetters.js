const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return console.log(`😀 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${actual}" !== "${expected}"`);

  }
};

const countLetters = function (str) {
  str = str.replace(/\s/g, '');
  let result = {};
  for (letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

//TEST CODE
const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["Fang"], undefined);
