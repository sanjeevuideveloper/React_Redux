const _ = require("lodash")



console.log('With the _.sample function, we can pick a random element from an array.');

 let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let word = _.sample(words);
console.log(word);