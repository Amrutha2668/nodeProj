const carInventory = require("../entry.js").inventory;
const problem2 = require("../problem2.js");

// Reference for the returned result
fetchedDetails = problem2.findLastCarRecord(carInventory);

// Fetching the entries from obtained object.
var entry = Object.entries(fetchedDetails);

// Printing the output in the required format.
console.log("Last entry in the inventory");
console.log(entry[1][0] + ": " + entry[1][1]);
console.log(entry[2][0] + ": " + entry[2][1]);
