const axios = require('axios');

const getLatLongForAddress = async (address) => {
  address = encodeURI(address)

  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GMAPS_API}`)

  if (response.data.status == 'REQUEST_DENIED') {
    throw new Error('Please check your GMaps API key.')

  }

  if (response.data.status == 'ZERO_RESULTS') {
    throw new Error('There are no results for that address.');
  }

  let dir = response.data.results[0].formatted_address;
  let lat = response.data.results[0].geometry.location.lat;
  let long = response.data.results[0].geometry.location.lng;

  return {
    dir,
    lat,
    long
  }

}

module.exports = {
  getLatLongForAddress
}
