require('dotenv').load();
const args = require('yargs').options( {
  address : {
    demand: true,
    alias: 'a'
  }
}).argv;
const { getLatLongForAddress } = require('./location/location');
const { getWeatherForLatLong } = require('./weather/weather');

/*
 * Fetches the temp information for an address string
 * @param {string} string - the address to get info for
 */
let getInfo = async (address) => {
  try {
    let coors = await getLatLongForAddress(address)

    let weather = await getWeatherForLatLong(coors.lat, coors.long)

    return `The current temp for ${address} is ${weather} C`;
  } catch (error) {
    return `Unable to fetch the temp for ${address}`
  }
}

getInfo(args.address)
  .then( (weather) => {
    console.log(weather);
  })
  .catch((err) => console.log(err))

