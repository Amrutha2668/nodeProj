// ==== Problem #4 ====
// Gives the manufacturing year of the cars.

exports.fetchCarYears = function (carInventory) {
  // Empty array to store the years.
  years = [];

  // Looping over carInventory to extract the car's year
  for (let i = 0; i < carInventory.length; i++) {
    years.push(carInventory[i]["car_year"]);
  }
  return years;
};
