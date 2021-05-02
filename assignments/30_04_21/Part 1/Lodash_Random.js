const _ = require("lodash")


console.log('The _.random function produces random values between the inclusive lower and upper bounds.');
let r = _.random(10);
console.log(r);

r = _.random(5, 10);
console.log(r);
