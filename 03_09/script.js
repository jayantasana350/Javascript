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

const room = {
  name: "All The Rooms",
  number: 5,
  color: "White and Green",
  roomLength: {
    left: 12,
    right: 23,
  },

  lidOpen: true,
  toggleLid: function (roomstatus) {
    this.lidOpen = roomstatus;
  },

  newRoomLength: function (leftroom, rightroom) {
    this.roomLength.left = leftroom;
    this.roomLength.right = rightroom;
  },
};


console.log("This is Room Length:", room.name);
console.log("This is Room Length:", room.number);
console.log("This is Room Length:", room.color);
console.log("This is Room Length:", room.roomLength);

console.log("This is Room Left Length:", room.roomLength.left);

room.newRoomLength(29, 43);

console.log("This is Room Left Length:", room.roomLength.left);