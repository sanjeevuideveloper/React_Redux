const _ = require("lodash");
console.log('The _.curry function turns a normal function into a curried one.');
function multiply(a, b, c) {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);