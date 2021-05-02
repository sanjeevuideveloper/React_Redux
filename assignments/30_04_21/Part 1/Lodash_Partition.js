const _ = require("lodash")
console.log('The partition operation splits the original collection into a pair of arrays. The first array contains elements for which the specified predicate yields true, while the second list contains elements for which the predicate yields false.');
 let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];
 let [nums2, nums3] = _.partition(nums, (e) => e < 0);

console.log(nums2);
console.log(nums3);