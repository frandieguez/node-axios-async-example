const axios = require('axios');

const getLatLong = async (direccion) => {
  direccion = encodeURI(direccion)

  let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${process.env.GMAPS_API}`)

  if (respuesta.data.status == 'ZERO_RESULTS') {
    throw new Error('No hay resultados para la ciudad');
  }

  let dir = respuesta.data.results[0].formatted_address;
  let lat = respuesta.data.results[0].geometry.location.lat;
  let long = respuesta.data.results[0].geometry.location.lng;

  return {
    dir,
    lat,
    long
  }

}

module.exports = {
  getLatLong
}
