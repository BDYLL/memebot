const { Wit, log } = require('node-wit');
const client = new Wit({accessToken: process.env.WIT_TOKEN});

const getCategory = async (message) => {
  
  // Make Wit API call.
  const witResponse = await client.message(message, {})
  let categories = witResponse.entities.intent || [];

  // Get strongest category guess.
  categories = categories.sort((a, b) => {
    return a.confidence - b.confidence;
  })

  const category = categories.length != 0 ? 
    categories[0].value : 
    "";

  return category;
}

module.exports = { getCategory };