// ==== Problem #5 ====
// Used to find the cars manufactured before 2000.

const problem4 = require("./problem4.js");

exports.olderCars = function (carInventory) {
  // Empty array for storing the cars older than 2000
  var olderCars = [];

  //Previously obtained result set from problem4.
  fetchedDetails = problem4.fetchCarYears(carInventory);

  //looping over fetchedDetails to check if year is less than 2000
  for (let year = 0; year < fetchedDetails.length; year++) {
    // checking if the year is less than 2000
    if (fetchedDetails[year] < 2000) {
      olderCars.push(fetchedDetails[year]);
    }
  }
  return olderCars;
};
