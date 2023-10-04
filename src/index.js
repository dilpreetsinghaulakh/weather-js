import "./style.css";
import mainUi from "./components/main.js";
import getLocation from "./getLocation.js";
import getProcessedWeather from "./getProcessedWeather";
import getWeather from "./getWeather";

const apiKey = "5cb842d772004033908123421231509";
var siUnits = true;

getLocation().then((coordinates) => {
  getWeather(apiKey, coordinates)
    .then((data) => {
      mainUi(getProcessedWeather(siUnits, data));
    })
    .catch((error) => {
      console.log(error);
    });
});
