const _ = require("lodash")
console.log('The _.filter function returns an array of elements for which the predicate function returns true.');
let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(nums, (e) => e > 0);
console.log(pos_nums);
