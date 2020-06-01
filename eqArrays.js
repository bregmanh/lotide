// Function checks if two arrays are equal

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        let result = eqArrays(arr1[i], arr2[i]);
        if (result === false) {
          return false;
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    } return true;
  }
}

module.exports = eqArrays;



