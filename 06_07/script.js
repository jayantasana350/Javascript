/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a = 5;
let b = 4;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}


// this is my practice code ================
// function add (a, b) {
//   return a + b;
// }

// console.log(add(5, 10));
// console.log(add("5", 10));

// function add(a, b) {
//   if (typeof a!== "number" || typeof b !== "number") {
//     throw new TypeError("Both arguements must be numbers");
    
//   }
//   return a + b;
// }


// function assertType(value, type) {
//   if (typeof value !== type) {
//     throw new TypeError(`Expected ${type}, but got $(typeof value)`);
    
//   }
// }
// function add (a, b) {
//   assertType(a, "Number");
//   assertType(b, "Number");
//   return a + b;
// }