const _ = require("lodash")

console.log('check version of Lodash Library');
const ver = _.VERSION
console.log(ver); 

console.log('The _.first/_.head functions return the first array element; the _.last function returns the last array element');
let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

console.log('The _.nth funcion gets the element at index n of an array. If n is negative, the nth element from the end is returned.');


let nums = [1, 2, 3, 4, 5, 6, 7, 8,9];
 
console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));
console.log('The _.chunk function creates an array of elements split into groups the length of the specified size.');
let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);

console.log('The _.slice method gets a slice from an array. It takes two indexes: the starting and ending index, where the starting index is inclusive and the ending is exclusive.');
let c3 = _.slice(nums, 2, 6);
console.log(c3);

let c4 = _.slice(nums, 0, 8);
console.log(c4);

console.log('The _.random function produces random values between the inclusive lower and upper bounds.');
let r = _.random(10);
console.log(r);

r = _.random(5, 10);
console.log(r);
console.log('With the _.sample function, we can pick a random element from an array.');

 words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let word = _.sample(words);
console.log(word);

console.log('The _.shuffle function shuffles a collection.');
console.log(words);
console.log(_.shuffle(words));
console.log(_.shuffle(words));
console.log(_.shuffle(words));

console.log('The _.times executes the function n times.');
_.times(4, () => {

    console.log("brave");
})

console.log('The _.delay function delays the execution of a function for the specified amount of milliseconds.');
function message()
{
    console.log("Some message");
}

//_.delay(message, 500);
console.log("Some other message");


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

console.log('The Lodash _.range function creates an array of numbers. The function accepts the start, end, and step parameters.');
let vals1 = _.range(10);
console.log(vals1);

let vals2 = _.range(0, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 5);
console.log(vals3);

console.log('Lodash allows to compute the maximum and minimum values of an array.');
 vals = [-3, 4, 0, 12, 43, 9, -12];

let min = _.min(vals);
console.log(min);

let max = _.max(vals);
console.log(max);

max = _.max(_.range(5, 25));
console.log(max);

let obs = [{n: 12}, {n: -4}, {n: 4}, {n: -11}];

min = _.minBy(obs, 'n');
console.log(min);

max = _.maxBy(obs, 'n');
console.log(max);

console.log('The _.sum function calculates the sum of array values.');
vals = [-2, 0, 3, 7, -5, 1, 2];

let sum = _.sum(vals);
console.log(sum);

console.log('The _.curry function turns a normal function into a curried one.');
function multiply(a, b, c) {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);

console.log('The _.filter function returns an array of elements for which the predicate function returns true.');
nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(nums, (e) => e > 0);
console.log(pos_nums);

console.log('The _.find function iterates over elements of a collection and returns the first element for which the predicate returns true. Likewise, the _.findLast returns the last element.');
let users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

let u1 = _.find(users, {name: 'Adam'});
console.log(u1);

let u2 = _.find(users, (u) => { return u.age > 60 });
console.log(u2);

let u3 = _.findLast(users, (u) => { return u.age > 60 });
console.log(u3);

console.log('The _.pull function removes all given values from the array.');
nums = ['a', 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(nums, 'a', 2);
console.log(nums);


console.log('The _.take function creates a slice of an array with n elements taken from the beginning. The _.takeRight function creates a slice of an array with n elements taken from the end.');

nums = [1, 2, 3, 4, 5, 6]

let nums2 = _.take(nums);
let nums3 = _.take(nums, 2);
let nums4 = _.takeRight(nums, 3)

console.log(nums2);
console.log(nums3);
console.log(nums4);


console.log('The _.takeWhile function creates a slice of an array with elements taken from the beginning. Elements are taken until the given predicate return false. In a similar fashion, the _.takeRightWhile function takes elements from the end.');

nums = [1, -2, 3, 4, -5, 6, 7, -8, -9]

 nums2 = _.takeWhile(nums, (n) => { return n < 0 });
 nums3 = _.takeRightWhile(nums, (n) => { return n < 0 });

console.log(nums2);
console.log(nums3);

console.log('The partition operation splits the original collection into a pair of arrays. The first array contains elements for which the specified predicate yields true, while the second list contains elements for which the predicate yields false.');
 nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];
 [nums2, nums3] = _.partition(nums, (e) => e < 0);

console.log(nums2);
console.log(nums3);

console.log('Lodash collection reduce');
nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

 sum = _.reduce(nums, (total, next) => 
	{  
	console.log('total  and  next is:',total, next);
	return total + next 
},0);
console.log(sum);
let colours = ["red", "green", "white", "blue", "black"];

let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
console.log(res);


console.log('The reducer function can be used to count the occurrence of the elements in the array.');
words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud', 
    'sky', 'forest', 'rock', 'sky'];

let tally = _.reduce(words, (total, next) => 
{
  console.log('total and next is', total,next);
  total[next] = (total[next] || 0) + 1 ;

  return total;
}, {});


console.log(tally);


console.log('Lodash reduce - group objects by property');

 users = [
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
