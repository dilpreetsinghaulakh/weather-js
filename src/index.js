import "./style.css";
import mainUi from "./components/main.js";
import getLocation from "./getLocation.js";
import getProcessedWeather from "./getProcessedWeather";
import getWeather from "./getWeather";
import search from "./components/search";

const apiKey = "5cb842d772004033908123421231509";
var siUnits = true;

getLocation().then((coordinates) => {
  getWeather(apiKey, coordinates)
    .then((data) => {
      mainUi(getProcessedWeather(siUnits, data), siUnits);
    })
    .catch((error) => {
      console.log(error);
    });
});

document
  .querySelector(".search-button-bottom-bar")
  .addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector("html").classList.add("stop-scroll");
    }, 750);
    scrollTo(0, 0);
    search(apiKey, siUnits);
  });
