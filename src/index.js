import getLocation from "./getLocation.js";
import getProcessedWeather from "./getProcessedWeather";
import getWeather from "./getWeather";

const apiKey = "5cb842d772004033908123421231509";
var siUnits = true;

getLocation().then((coordinates) => {
  getWeather(apiKey, coordinates)
    .then((data) => {
      getProcessedWeather(siUnits, data);
    })
    .catch((error) => {
      console.log(error);
    });
});
