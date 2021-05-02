const _ = require("lodash");

let users = [
  { id: 1, name: 'John', about: { 'age': 25, 'colours': ['red', 'green'], } },
  { id: 2, name: 'Lenny', about: { 'age': 51, 'colours': ['blue'], } },
  { id: 3, name: 'Andy', about: { 'age': 43, 'colours': ['orange', 'steelblue'], } },
  { id: 4, name: 'Peter', about: { 'age': 52, 'colours': ['black'], } },
  { id: 5, name: 'Anna', about: { 'age': 43, 'colours': ['purple'], } },
];


let name = _.at(users[2], 'name');
console.log(name);

let colour = _.at(users[0], 'about.colours[0]');
console.log(colour);
// We have a list of objects. We get the values by specifying the path to the given property.

// $ node at.js 
// [ 'Andrew' ]
// [ 'red' ]
// This is the output.