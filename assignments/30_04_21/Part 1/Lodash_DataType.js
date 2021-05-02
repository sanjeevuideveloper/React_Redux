const _ = require("lodash");
console.log('Lodash contains functions which determine the data type of a value.');
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];
function dataType(){


vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});

}
dataType();