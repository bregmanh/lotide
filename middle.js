const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

//Function returns the middle item in an array if array length is odd, and two middle elements if array length is even 
const middle = function (arr) {
  let middleIndex;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[(arr.length) / 2]];
  } else {
    middleIndex = (arr.length - 1) / 2;
    return [arr[middleIndex]];
  }
}

module.exports = middle;


