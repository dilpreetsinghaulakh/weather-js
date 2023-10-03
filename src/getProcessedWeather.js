export default function (siUnitsEnable, weatherData) {
  if (siUnitsEnable) {
    console.log(weatherData.current.temp_c); // Just for testing
  }
}
