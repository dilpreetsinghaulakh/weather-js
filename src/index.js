import "./style.css";
import mainUi from "./components/main.js";
import getLocation from "./getLocation.js";
import getProcessedWeather from "./getProcessedWeather";
import getWeather from "./getWeather";
import search from "./components/search";
import settings from "./components/settings";
import config from "./components/config";

const apiKey = "5cb842d772004033908123421231509";

if (!localStorage.getItem("siUnitsEnabled")) {
  localStorage.setItem("siUnitsEnabled", true);
}
if (JSON.parse(localStorage.getItem("currentLocationEnabled"))) {
  getLocation().then((coordinates) => {
    getWeather(apiKey, coordinates)
      .then((data) => {
        sessionStorage.setItem("data", JSON.stringify(data));
        mainUi(
          getProcessedWeather(
            JSON.parse(localStorage.getItem("siUnitsEnabled")),
            data
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });
} else if (localStorage.getItem("savedLocation")) {
  getWeather(apiKey, JSON.parse(localStorage.getItem("savedLocation")))
    .then((data) => {
      sessionStorage.setItem("data", JSON.stringify(data));
      mainUi(
        getProcessedWeather(
          JSON.parse(localStorage.getItem("siUnitsEnabled")),
          data
        )
      );
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  config(apiKey);
}

document
  .querySelector(".search-button-bottom-bar")
  .addEventListener("click", () => {
    search(apiKey);
  });

document
  .querySelector(".menu-button-bottom-bar")
  .addEventListener("click", () => {
    settings();
  });
