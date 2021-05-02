const _ = require("lodash");

let p = {age: 24, name: "Rebecca", occupation: "teacher"};

let keys = _.keys(p);
console.log(keys);

let values = _.values(p);
console.log(values);
// In the example, we print the keys and values of a person object.

// $ node keys_values.js 
// [ 'age', 'name', 'occupation' ]
// [ 24, 'Rebecca', 'teacher' ]
// This is the output.