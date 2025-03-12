/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// const greenPack = {
//   name: "Frog Pack",
//   color: "green",
//   volume: 8,
//   pocketNum: 3,
// };

// const addPack = (currentPack) => {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//     <h1>${currentPack.name}</h1>
//     <ul>
//       <li>Volume: ${currentPack.volume}</li>
//       <li>Color: ${currentPack.color}</li>
//       <li>Number of pockets: ${currentPack.pocketNum}</li>
//     </ul>
//   `;
//   return newArticle;
// };

// const main = document.querySelector("main");
// main.append(addPack(greenPack));


window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("This is the result of volume:", this.volume);
    this.volume = volume;
    console.log("This is the result of volume:", this.volume);

    (function () {
      console.log("This is a nasted function:", this.volume);
    })();

     (() => {
      console.log("This is a nasted function:", this.volume);
    })();

  },
};
console.log(greenPack.newVolume(10));

