/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):


// Practice of Function codes
// const sumsungPhone = {
//   color: "Black",
//   model: "Sumsung M14",
//   weight: "14 Gram",
//   style: "Modern Style",
//   camera: 2,
//   backpack: 1,
// };

// const addPhone = function (phoneSpacification) {
//     const createPhone = document.createElement("article");
//     createPhone.innerHTML = `
//       <ul>
//         <li>Phone Color: ${phoneSpacification.color} </li>
//         <li>Phone Model: ${phoneSpacification.model}</li>
//         <li>Phone Weight: ${phoneSpacification.weight}</li>
//         <li>Phone Style: ${phoneSpacification.style}</li>
//         <li>Phone Camera: ${phoneSpacification.camera}</li>
//         <li>Phone Backpack: ${phoneSpacification.backpack}</li>
//       </ul>
//     `;
//     return createPhone;
// };

// const main = document.querySelector("main");
// main.append(addPhone(sumsungPhone));
window.volume = 52;

const phoneSpc = {
  color: "Black",
  model: "Sumbsung-M14",
  quantity: 5,
  volume: 23,
  camera: "5 DLSR",
  newVolume: function (volume) {
    console.log("this.volume in the method: ", this.volume);
    this.volume = volume;

    console.log("this.volume after update: ", this.volume);
    this.volume = volume;
    (function () {
      console.log("this.volume in nested function: ", this.volume);
    })();
    (() => {
      console.log("this.volume in arrow function: ", this.volume);
    })();
  },
  
};

console.log(phoneSpc.newVolume(15));