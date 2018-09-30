const axios = require('axios');

const getWeather = async (lat, long) => {
  let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.OPENWEATHER_API}`)

  return weather.data.main.temp
}

module.exports = {
  getWeather
}
