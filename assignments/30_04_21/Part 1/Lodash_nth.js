const _ = require("lodash")



console.log('The _.nth funcion gets the element at index n of an array. If n is negative, the nth element from the end is returned.');


let nums = [1, 2, 3, 4, 5, 6, 7, 8,9];
 
console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));