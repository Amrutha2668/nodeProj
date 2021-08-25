// ==== Problem #6 ====
// Filters the cars details by the car name.

exports.filterCarsByName = function (carInventory) {
  // Empty array to store the filtered result.
  var filteredResult = [];

  // Looping over the carInventory to filter the result
  for (let i = 0; i < carInventory.length; i++) {
    // checking the condition
    if (carInventory[i]["car_make"] == "BMW" ||carInventory[i]["car_make"] == "Audi") {
      filteredResult.push(carInventory[i]);
    }
  }
  // console.log(filteredResult);
  return JSON.stringify(filteredResult);
};
