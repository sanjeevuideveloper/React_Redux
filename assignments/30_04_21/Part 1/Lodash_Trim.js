const _ = require("lodash")

let word = '\tfalcon\t';

let trimmed1 = _.trim(word);
console.log(trimmed1 + 'owl');

let trimmed2 = _.trimStart(word);
console.log(trimmed2 + 'owl');

let trimmed3 = _.trimEnd(word);
console.log(trimmed3 + 'owl');
// In the example, we trim whitespace characters from a word.

// let trimmed = _.trim(word);
// The _.trim function removes the whitespace characters from both sides.

// let trimmed2 = _.trimStart(word);
// The _.trimStart function removes the whitespace characters from the start of the string.

// let trimmed3 = _.trimEnd(word);
// The _.trimEnd function removes the whitespace characters from the end of the string.

// $ node trim.js 
// falconowl
// falcon  owl
//         falconowl
// This is the output.


 words = ['_falcon', '-owl-', '_-sky-_'];
let trimmed = _.map(words, (word) => { return _.trim(word, '-_')});

console.log(trimmed);
// In this example, we remove two custom characters from an array of strings. We also use the _.map function.

// $ node trim2.js 
// [ 'falcon', 'owl', 'sky' ]