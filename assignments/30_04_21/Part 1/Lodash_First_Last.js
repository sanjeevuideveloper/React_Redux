const _ = require("lodash")
console.log('The _.first/_.head functions return the first array element; the _.last function returns the last array element');
let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);
console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);