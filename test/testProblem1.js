const carInventory = require("../entry.js").inventory;
const problem1 = require("../problem1.js");

// fetchedDetails references to the returned result.
var fetchedDetails = problem1.findById(carInventory);

// Fetching all the entries from the returned object.
var entry = Object.entries(fetchedDetails);

// Printing the results in the required format.
console.log("Car details of CarId 33:\n");
console.log(entry[3][0] + ": " + entry[3][1]);
console.log(entry[1][0] + ": " + entry[1][1]);
console.log(entry[2][0] + ": " + entry[2][1] + "\n");
