// ==== Problem #2 ====
// Gives the last entry in the inventory.

exports.findLastCarRecord = function (carInventory) {
  // Looping over the carInventory to fetch the last entry in the inventory
  for (let id = 0; id < carInventory.length; id++) {
    if (id === carInventory.length - 1) {
      // Returning the last entry in the inventory.
      return carInventory[id];
    }
  }
};
