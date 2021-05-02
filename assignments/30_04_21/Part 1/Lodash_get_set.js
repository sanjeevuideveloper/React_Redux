onst _ = require("lodash")

let data = { user: { name: "John Doe", age: 34, occupation: "gardener"} };
 
_.set(data, "user.age", 36);
console.log(data);

console.log(_.get(data, "user.name", "unknown"));
console.log(_.get(data, "user.marital_status", "unknown"));
// In the example, we set a new age for the user, get his name and marital status. The marital status property does not exist, so we get the default unknown.

// $ node get_set.js 
// { user: { name: 'John Doe', age: 36, occupation: 'gardener' } }
// John Doe
// unknown