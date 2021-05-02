const _ = require("lodash")
console.log('The _.takeWhile function creates a slice of an array with elements taken from the beginning. Elements are taken until the given predicate return false. In a similar fashion, the _.takeRightWhile function takes elements from the end.');

let nums = [1, -2, 3, 4, -5, 6, 7, -8, -9]

 nums2 = _.takeWhile(nums, (n) => { return n < 0 });
 nums3 = _.takeRightWhile(nums, (n) => { return n < 0 });

console.log(nums2);
console.log(nums3);