/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = () => {
  let sum = 29.95;
  let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${sum}
  Tip percentage: ${percentage}%
  Tip:            ${tip.toFixed(2)}
  Total:          ${total.toFixed(2)}
`);
};

tipCalculator();


// my code goes here 

// const myCalculator = () => {
//   let sum = 35.29;
//   let percentage = 10;
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;

//   console.log(
//     `
//     This is sum before Tip: ${sum}
//     Tip Percentage: ${percentage}
//     Tip: ${tip.toFixed(2)}
//     Tip: ${total.toFixed(2)}    
//     `
//   );
// };

// myCalculator();



const myCalculator = (sum, percentage, currency, percentsign, prefix) => {

let tip = sum * (percentage / 100);
let total = sum + tip;

  if (prefix) {
      console.log(`        
        This is sum before Tip: ${currency}${sum}
        Tip Percentage: ${percentage}${percentsign}
        Tip: ${currency}${tip.toFixed(2)}
        Tip: ${currency}${total.toFixed(2)}        
      `);
  } else{
      console.log(`
        This is sum before Tip: ${sum}${currency}
        Tip Percentage: ${percentage}${percentsign}
        Tip: ${tip.toFixed(2)}${currency}
        Tip: ${total.toFixed(2)} ${currency}   
      `);
    };

  
};

myCalculator(35.29, 24, "$", "%", true);