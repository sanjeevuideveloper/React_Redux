const _ = require("lodash")
console.log('Lodash reduce - group objects by property');

 let users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' }
];

let grouped = _.reduce(users, (result, user) => {

    (result[user.occupation] || (result[user.occupation] = [])).push(user);  
    return result;
}, {});

console.log(grouped);

// We have an array of users. We group the users by their occupation. The initial value is an empty object. The resulting object has the occupations as properties; each property contains a list of users with the corresponding occupation.

// let grouped = _.reduce(users, (result, user) => {

//     (result[user.occupation] || (result[user.occupation] = [])).push(user);  
//     return result;
// }, {});
// The reducer either creates a new property with an empty array and pushes the first user or adds a new user object to already created array.

// $ node grouping.js 
// {
//   gardener: [
//     { name: 'John', age: 25, occupation: 'gardener' },
//     { name: 'Peter', age: 52, occupation: 'gardener' }
//   ],
//   programmer: [
//     { name: 'Lenny', age: 51, occupation: 'programmer' },
//     { name: 'Albert', age: 46, occupation: 'programmer' }
//   ],
//   teacher: [
//     { name: 'Andrew', age: 43, occupation: 'teacher' },
//     { name: 'Anna', age: 43, occupation: 'teacher' },
//     { name: 'Adam', age: 47, occupation: 'teacher' }
//   ],
//   driver: [ { name: 'Robert', age: 32, occupation: 'driver' } ]
// }
// This is the output.