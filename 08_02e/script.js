/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function myPractice(a, b) {
  let c = a + b;
  return c;
}

console.log("Do some match using function declaration: ", myPractice(15, 6))


// Function Expression
const MyPracticeMath = function (a, b) {
  let c = a * b;
  return c;
}

console.log("Do some match using function Expressions: ", MyPracticeMath(5, 6));



// Immediately Invoked Function Expression (IIFE)
(function () {
  let a = 4;
  let b = 6;
  let c = MyPracticeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
