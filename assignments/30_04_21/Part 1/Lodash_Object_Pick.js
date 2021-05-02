const _ = require("lodash");

console.log(_.pick({ name: 'John', age: 25 }, 'name', 'age'));
console.log(_.pick({ name: 'John', age: 25 }, 'age'));
// We pick properties from a simple object.

// $ node picking.js 
// { name: 'John',age:25 }
// { age: 25 }
// This is the output.