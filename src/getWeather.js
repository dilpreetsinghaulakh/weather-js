export default async function getWeather(apiKey, coordinates) {
  const getBaseUrl = (fileType, options) => {
    return `https://api.weatherapi.com/v1/${fileType}.json?key=${apiKey}&q=${coordinates.toString()}&${options}`;
  };

  const weatherData = await (
    await fetch(getBaseUrl("forecast", "days=3"), { mode: "cors" })
  ).json();
  console.log(weatherData);

  // Testing ->
  const currentData = {
    ...weatherData.current[("feelslike_c", "feelslike_v")],
  };

  console.log(currentData);
  console.log(weatherData.current);

  return { current: currentData };
  // <-
}
