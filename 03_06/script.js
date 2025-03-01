/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum Value:", backpack.pocketNum);
console.log("The strapLength Value:", backpack.strapLength.left);

// standard and advance way to use 
// console.log("The pocketNum Value:", backpack["pocketNum"]);

// Different System 

var query = "pocketNum";
console.log("The Standard pocketNum Value:", backpack[query]);

