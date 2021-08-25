const carInventory = require("../entry.js").inventory;
const problem5 = require("../problem5.js");

// Reference for the returned object.
fetchedDetails = problem5.olderCars(carInventory);

// Printing the array object.
console.log(fetchedDetails);
console.log(fetchedDetails.length);
