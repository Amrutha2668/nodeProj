// ==== Problem #1 ====
// Help the dealer to find about the car information of an particular card-id(33)

exports.findById = function (carInventory) {
  //looping over carInventory array to get the desired object's details.
  for (let id = 0; id < carInventory.length; id++) {
    // Since array starts from 0, its always 1 less than the required number.
    if (id === 32) {
      return carInventory[id];
    }
  }
};
