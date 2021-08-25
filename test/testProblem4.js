const carInventory = require("../entry.js").inventory;
const problem4 = require("../problem4.js");

//Reference for the returned object.
fetchedDetails = problem4.fetchCarYears(carInventory);
console.log(fetchedDetails);
