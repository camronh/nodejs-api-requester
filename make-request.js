const axios = require("axios");

async function makeRequest(url) {
  // Make the API request
  const results = await axios.get(url);

  // Turn results into a nicely formatted JSON object
  const data = JSON.stringify(results.data, null, 2);

  // Print out results
  console.log(data);
}

// Run function
makeRequest("https://pokeapi.co/api/v2/pokemon/ditto");
