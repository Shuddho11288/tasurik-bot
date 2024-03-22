const axios = require('axios');

async function generateWeatherMessage(area) {
  try {
    const apiKey = require('../env.json')['weatherapi']
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${apiKey}`;
    
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    if (weatherData.cod === '404') {
      return `Sorry, I couldn't find weather information for ${area}.`;
    }

    const {
      name,
      weather,
      main,
      wind,
      sys,
      visibility,
      clouds,
      timezone,
    } = weatherData;

    const message = `
      Current weather in ${name}:
      - Weather: ${weather[0].description}
      - Temperature: ${(main.temp-273.15).toFixed(2)}°C
      - Feels like: ${(main.feels_like-273.15).toFixed(2)}°C
      - Min temperature: ${(main.temp_min-273.15).toFixed(2)}°C
      - Max temperature: ${(main.temp_max-273.15).toFixed(2)}°C
      - Pressure: ${main.pressure} hPa
      - Humidity: ${main.humidity}%
      - Wind Speed: ${wind.speed} m/s, Direction: ${wind.deg}°
      - Visibility: ${visibility} meters
      - Cloudiness: ${clouds.all}%
      - Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString('en-US')}
      - Sunset: ${new Date(sys.sunset * 1000).toLocaleTimeString('en-US')}
      - Timezone: UTC${timezone / 3600} hours
    `;

    return message.replace(/^\s+/gm, ''); // Remove leading whitespace
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return 'Sorry, something went wrong while fetching weather data.';
  }
}

const weather = async (api, event)=>{
  
  let city = event.body.split('weather')[1]
  if (city.length == undefined) {
    await api.sendMessage("Please enter a city name.", event.threadID, event.messageID);
    return
  }
  else {
    city = city.trim()
  }
  const message = await generateWeatherMessage(city);
  api.sendMessage(message, event.threadID);
}

module.exports = {weather:weather}