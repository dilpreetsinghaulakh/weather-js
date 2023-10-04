export default function (siUnitsEnable, weatherData) {
  let current = {};
  let days = [];

  if (siUnitsEnable) {
    current = {
      temp: weatherData.current.temp_c,
      conditionCode: weatherData.current.condition.code,
      condition: weatherData.current.condition.text,
      humidity: weatherData.current.humidity,
      isDay: weatherData.current.is_day,
      feelsLike: weatherData.current.feelslike_c,
      uv: weatherData.current.uv,
      precipitation: weatherData.current.precip_mm,
      pressure: weatherData.current.pressure_mb,
      visibility: weatherData.current.vis_km,
      wind: weatherData.current.wind_kph,
      windDirection: weatherData.current.wind_dir,
      windDegree: weatherData.current.wind_degree,
    };

    for (let i = 0; i < 3; i++) {
      const data = weatherData.forecast.forecastday[i].day;
      days.push({
        avgTemp: data.avgtemp_c,
        minTemp: data.mintemp_c,
        maxTemp: data.maxtemp_c,
        condition: data.condition.text,
        conditionCode: data.condition.code,
      });
    }
  }

  let location = {
    name: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
  };

  return { current, days, location };
}

// For now hours forecast is not being used
