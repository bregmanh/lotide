// FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return console.log(`😀 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${actual}" !== "${expected}"`);

  }
};

const findKey = function (obj, callback) {

  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
}

module.exports = findKey;


// // TEST CODE

// let result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(result, "noma");
