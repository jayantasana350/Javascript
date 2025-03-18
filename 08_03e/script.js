/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// const greenPack = {
//   name: "Frog Pack",
//   color: "green",
//   volume: 8,
//   pocketNum: 3,
// };

// const addPack = function (currentPack) {
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


const backPack = {
  name: "LG Laptop Bag",
  model: "LG2546",
  color: "Black",
  volume: 8,
  pocketNum: 2,
};

const addBag = function (currentBackpack) {
  const newBagDetails = document.createElement( "article");
  newBagDetails.innerHTML = `
  <ul>
    <li>Bag Name: ${currentBackpack.name}</li>
    <li>Bag Model: ${currentBackpack.model}</li>
    <li>Bag Color: ${currentBackpack.color}</li>
    <li>Bag Volume: ${currentBackpack.volume}</li>
    <li>Bag Pocket Number: ${currentBackpack.pocketNum}</li>
  </ul>
  `;
  return newBagDetails;
}
const main = document.querySelector("main");
main.append(addBag(backPack));