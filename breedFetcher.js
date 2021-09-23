const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q='
const breedName = process.argv[2];

request(`${URL}${breedName}`, (error, response, body) => {
  if (error) {
    return console.log(`Failed to request: ${error}.`)
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description)
  } else {
    console.log(`This ${breedName} does not exist.`)
  }
});