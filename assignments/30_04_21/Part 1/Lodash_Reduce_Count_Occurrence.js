const _ = require("lodash")
console.log('The reducer function can be used to count the occurrence of the elements in the array.');
let words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 
    'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(words, (total, next) => 
{
  console.log('total and next is', total,next);
  total[next] = (total[next] || 0) + 1 ;

  return total;
}, {});


console.log(tally);

// The thearray of words, everal words are included multiple times. The initial value is an empty object. The reducer function either creates a new property or increases the value of the property.

// $ node tally.js 
// { sky: 4, forest: 2, wood: 1, rock: 2, cloud: 1 }
// This is the output.