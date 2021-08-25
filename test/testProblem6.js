const carInventory = require("../entry.js").inventory;
const problem6 = require("../problem6.js");

// Reference the returned object.
fetchedDetails = problem6.filterCarsByName(carInventory);

// Printing the fetched result.
console.log("Json Object of the filtered car list:\n" + fetchedDetails);
