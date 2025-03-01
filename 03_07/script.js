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



const computerBag = {
  name: "HP Computer Bag",
  color: "Black",
  model: 2468,
  pocketNum: 2,
  strapLength: {
    left: 25,
    right: 34,
    top: 13,
  },
};

console.log(computerBag);
console.log("This is ComputerBag All Spacification:", computerBag);
console.log("This is ComputerBag name value:", computerBag.name);
console.log("This is ComputerBag name value:", computerBag.color);
console.log("This is ComputerBag name value:", computerBag.model);
console.log("This is ComputerBag name value:", computerBag.pocketNum);
console.log("This is ComputerBag name value:", computerBag.strapLength);
console.log("This is ComputerBag name value:", computerBag.strapLength.left);
console.log("This is ComputerBag name value:", computerBag.strapLength.right);
console.log("This is ComputerBag name value:", computerBag.strapLength.top);



var standardsystem = "pocketNum";
console.log("This is ComputerBag Standard System value:", backpack[standardsystem]);
