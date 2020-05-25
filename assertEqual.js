// FUNCTION IMPLEMENTATION

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return console.log("😀 Assertion Passed: \"" + actual + "\" === \"" + expected + "\"");
  } else {
    return console.log("🔥 Assertion Failed: \"" + actual + "\" !== \"" + expected + "\"");

  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 3);
