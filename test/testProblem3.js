const carInventory = require("../entry.js").inventory;
const problem3 = require("../problem3.js");

// References for returned object.
fetchedDetails = problem3.carModelsSorting(carInventory);

// Printing output.
console.log("car models name in sorted-order:");
console.log(fetchedDetails);
