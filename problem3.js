// ==== Problem #3 ====
// Sorts the array based on the car-model's property, in ascending order.

exports.carModelsSorting = function (carInventory) {

  // Creating empty array to store the car_model_names
  let carModel = [];
  // Looping over the carInventory
  for (let i = 0; i < carInventory.length; i++) {
    carModel.push(carInventory[i]["car_model"]);
  }
  // Calling sort method on the carModel array and returning.
  return carModel.sort();
};
