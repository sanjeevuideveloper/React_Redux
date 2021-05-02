const _ = require("lodash")
console.log('The _.pull function removes all given values from the array.');
let nums = ['a', 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(nums, 'a', 2);
console.log(nums);
