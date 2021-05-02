const _ = require("lodash");

let p = {age: 24, name: "Rebecca", occupation: "teacher"};

_.forIn(p, (value, key) => {

    console.log(`${key}: ${value}`);
})

// In the example, we iterate over properties of a person object using _.forIn.

// $ node iter_object_props.js 
// age: 24
// name: Rebecca
// occupation: teacher
// This is the output.