const assertEqual = require('../assertEqual');
const head = require('../head');


// TEST CODE
assertEqual(head([5,6,7]), 5); //=> true
assertEqual(head([]), 5); // => false
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //=> true
