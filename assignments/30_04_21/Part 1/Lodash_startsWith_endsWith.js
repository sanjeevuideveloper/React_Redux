const _ = require("lodash");

let words = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

console.log("Starting with 't'");
words.forEach( e => {

    if (_.startsWith(e, 't')) {

        console.log(e);
    }
});

console.log("Ending with 'k'");
words.forEach( e => {

    if (_.endsWith(e, 'k')) {

        console.log(e);
    }
});
// In the example, we print the words that start with 't' and end with 'k'.

// $ nodejs string_startend.js 
// Starting with 't'
// tank
// tourist
// ten
// Ending with 'k'
// tank
// ink
// This is the output.