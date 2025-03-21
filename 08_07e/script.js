/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */




// const tipCalculator = (sum, percentage, currency, prefix) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   if (prefix) {
//     console.log(`
//       Sum before tip: ${currency}${sum}
//       Tip percentage: ${percentage}%
//       Tip:            ${currency}${tip.toFixed(2)}
//       Total:          ${currency}${total.toFixed(2)}
//     `);
//   } else {
//     console.log(`
//       Sum before tip: ${sum}${currency}
//       Tip percentage: ${percentage}%
//       Tip:            ${tip.toFixed(2)}${currency}
//       Total:          ${total.toFixed(2)}${currency}
//     `);
//   }
// };

// tipCalculator(29.95, 18, "kr", false);




// const formatter = (value) => {
//   let formattedValue
//   return formattedValue
// }

const newCalculator = (sum, percentage) => {
  const sumTip = sum * (sum / 100);
  const sumTotal = sum + sumTip;
  console.log(`
    Sum before Tip: ${sum};
    Tip Percentage: ${percentage};
    Tip: ${sumTip.toFixed(5)};
    Total: ${sumTotal.toFixed(5)};
  `);
};

newCalculator(15, 2);



// const formatter = ( value ) => {
//   let formattedValue
//   return formattedValue
// }

// const tipCalculator = (sum, percentage) => {
//   const tip = sum * (percentage / 100);
//   const total = sum + tip;
//   console.log(`
//     Sum before Tip: ${formatter(sum)}
//     Tip Percentage: ${percentage}
//     Tip: ${formatter(tip)}
//     Total: ${formatter(total)}
//   `);
// };

// tipCalculator(15.9, 2);