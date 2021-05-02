const _ = require("lodash");
console.log('The Lodash _.range function creates an array of numbers. The function accepts the start, end, and step parameters.');
let vals1 = _.range(10);
console.log(vals1);

let vals2 = _.range(0, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 5);
console.log(vals3);
