const args = require('yargs').options( {
  direccion : {
    demand: true,
    alias: 'd'
  }
}).argv;
const {getLatLong} = require('./lugar/lugar');
const { getWeather } = require('./weather/weather')
require('dotenv').load();

let getInfo = async (direccion) => {

  try {
    let coors = await getLatLong(direccion)

    let weather = await getWeather(coors.lat, coors.long)

    return `El clima es de ${direccion} es de ${weather} C`;
  } catch (error) {
    return `No se pudo obtener la tempratura de ${direccion}`
  }
}

getInfo(args.direccion)
  .then( (weather) => {
    console.log(weather);
  })
  .catch((err) => console.log(err))

