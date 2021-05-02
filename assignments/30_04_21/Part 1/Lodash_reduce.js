const _ = require("lodash")
console.log('Lodash collection reduce');
let nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

 sum = _.reduce(nums, (total, next) => 
	{  
	console.log('total  and  next is:',total, next);
	return total + next 
},0);
console.log(sum);
let colours = ["red", "green", "white", "blue", "black"];

let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
console.log(res);

// Reduction is a terminal operation that aggregates list values into a single value. The _.reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The function that is being applied is called reducer function.

// Note: reduction operations are really powerful. They can be used to calculate sums, products, averages, maximum and minimum values, sort, reverse, flatten arrays and many more.
// For a more in-depth coverage of reductions, read the JavaScript reduce tutorial.

// reduce.js
// const _ = require("lodash");

// let nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

// let sum = _.reduce(nums, (total, next) => { return total + next });
// console.log(sum);

// let colours = ["red", "green", "white", "blue", "black"];

// let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
// console.log(res);
// In the example, we use the reduce operation on a list of integers and strings.

// let sum = _.reduce(nums, (total, next) => { return total + next });
// console.log(sum);
// We calculate the sum of values. The total is the accumulator, the next is the next value in the list.

// let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
// The _.reduceRight accumulates a value starting with last element and applying the operation from right to left to each element and the current accumulator value.

// $ node reduce_simple.js 
// 45
// red-green-white-blue-black
// This is the output.