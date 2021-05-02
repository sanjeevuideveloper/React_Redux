const _ = require("lodash");
console.log('The _.delay function delays the execution of a function for the specified amount of milliseconds.');
function message()
{
    console.log("Some message");
}

_.delay(message, 500);