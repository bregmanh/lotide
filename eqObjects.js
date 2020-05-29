const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return console.log(`😀 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    return console.log(`🔥 Assertion Failed: "${actual}" !== "${expected}"`);

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
}

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let output;
  if (keys1.length === keys2.length) {
    keys1.forEach(key => {
      if (object1[key] && object2[key]) { //if the key exists in both objects
        if (typeof object1[key] === 'object' && Array.isArray(object1[key]) === false) {//if object
          output = eqObjects(object1[key], object2[key]); //check if objects are equal

        } else {
          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

            if (eqArrays(object1[key], object2[key]) === false) {  //check is arrays are equal
              return false;
            }
          }
          else if (object1[key] !== object2[key]) { //check if the values of keys are equal
            return false;;
          }
        }
      } else {
        return false;
      }

    }); if (output !== false) {//check if output hasnt been modified to false
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//TEST CODE
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false

//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false

//const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false