const _ = require("lodash");

let words = ["sky", "Sun", "Blue Island"];

console.log(_.map(words, _.camelCase));
console.log(_.map(words, _.capitalize));
console.log(_.map(words, _.kebabCase));
console.log(_.map(words, _.lowerCase));
console.log(_.map(words, _.upperCase));
// In the example, we modify the case of words with _.camelCase, _.capitalize, ._kebabCase, _lowerCase, and _.upperCase.

// $ node string_case.js 
// [ 'sky', 'sun', 'blueIsland' ]
// [ 'Sky', 'Sun', 'Blue island' ]
// [ 'sky', 'sun', 'blue-island' ]
// [ 'sky', 'sun', 'blue island' ]
// [ 'SKY', 'SUN', 'BLUE ISLAND' ]
// This is the output.