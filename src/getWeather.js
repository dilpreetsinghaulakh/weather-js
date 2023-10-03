export default async function getWeather(apiKey, coordinates) {
  const getBaseUrl = (fileType, options) => {
    return `https://api.weatherapi.com/v1/${fileType}.json?key=${apiKey}&q=${coordinates.toString()}&${options}`;
  };

  const weatherData = await (
    await fetch(getBaseUrl("forecast", "days=3&hours"), { mode: "cors" })
  ).json();

  return weatherData;
}
