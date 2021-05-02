const _ = require("lodash")
console.log('The _.take function creates a slice of an array with n elements taken from the beginning. The _.takeRight function creates a slice of an array with n elements taken from the end.');

let nums = [1, 2, 3, 4, 5, 6]

let nums2 = _.take(nums);
let nums3 = _.take(nums, 2);
let nums4 = _.takeRight(nums, 3)

console.log(nums2);
console.log(nums3);
console.log(nums4);