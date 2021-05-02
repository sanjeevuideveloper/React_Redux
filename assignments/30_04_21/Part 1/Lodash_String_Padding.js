const _ = require("lodash");

let nums = [657, 122, 3245, 345, 99, 18];

nums.forEach( e => {

    console.log(_.padStart(e.toString(), 20, '.'));
});



// The example pads numbers with a dot character using _.padStart.

// $ node string_pad.js 
// .................657
// .................122
// ................3245
// .................345
// ..................99
// ..................18
// This is the output.

