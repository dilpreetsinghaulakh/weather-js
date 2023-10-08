import getLocation from "../getLocation";
import getProcessedWeather from "../getProcessedWeather";
import getWeather from "../getWeather";
import about from "./about";
import mainUi from "./main";

export default function config(apiKey) {
  document.documentElement.style.setProperty("--bg-gradient-end", "#050505");

  const container = document.createElement("div");
  container.className = "container-config";

  const innerContent = document.createElement("div");
  innerContent.className = "inner-content-config";

  const loading = document.createElement("p");
  loading.textContent = "Loading...";
  loading.className = "loading-config";

  const currentLocationButton = document.createElement("button");
  currentLocationButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.09576 5.53214L18.3612 12.9037L12.2579 12.9045L10.1697 18.6394L7.09576 5.53214Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> Current Location`;
  currentLocationButton.className = "current-button-config";

  currentLocationButton.addEventListener("click", () => {
    loading.style.height = "auto";
    loading.style.opacity = "1";
    loading.style.padding = "0.5rem 1.5rem";

    getLocation().then((coordinates) => {
      if (coordinates !== "error") {
        getWeather(apiKey, coordinates)
          .then((data) => {
            sessionStorage.setItem("data", JSON.stringify(data));
            mainUi(
              getProcessedWeather(
                JSON.parse(localStorage.getItem("siUnitsEnabled")),
                data
              )
            );
            container.style.opacity = "0";
            setTimeout(() => {
              container.remove();
            }, 500);

            localStorage.setItem("currentLocationEnabled", true);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        loading.style.height = "0";
        loading.style.opacity = "0";
        loading.style.padding = "0";
      }
    });
  });

  const currentLocationInfo = document.createElement("p");
  currentLocationInfo.textContent =
    "You will be asked for permission of location access. Note that your location will be shared with WeatherAPI.com to get weather data.";
  currentLocationInfo.className = "info-config";

  const or = document.createElement("h1");
  or.textContent = "OR";

  const searchBar = document.createElement("div");
  searchBar.className = "searchbar-config";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Location";
  input.className = "search-input-config";

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.className = "search-button-config";

  searchButton.addEventListener("click", () => {
    loading.style.height = "auto";
    loading.style.opacity = "1";
    loading.style.padding = "0.5rem 1.5rem";

    getWeather(apiKey, input.value).then((data) => {
      if (!data.error) {
        sessionStorage.setItem("data", JSON.stringify(data));
        mainUi(
          getProcessedWeather(
            JSON.parse(localStorage.getItem("siUnitsEnabled")),
            data
          )
        );
        container.style.opacity = "0";
        setTimeout(() => {
          container.remove();
        }, 500);
        localStorage.setItem("currentLocationEnabled", false);
        localStorage.setItem("savedLocation", JSON.stringify(input.value));
      } else {
        input.style.border = "1px solid #ec5634";
        loading.style.height = "0";
        loading.style.opacity = "0";
        loading.style.padding = "0";
      }
    });
  });

  searchBar.append(input, searchButton);

  const info = document.createElement("p");
  info.textContent =
    "Please enter full name (like Stuttgart), or abbreviation (like NYC), or coordinates separated by a comma (latitude, longitude) of the location that you want to search.";
  info.className = "info-config";

  innerContent.append(
    currentLocationButton,
    currentLocationInfo,
    or,
    searchBar,
    loading,
    info,
    about()
  );

  container.appendChild(innerContent);

  document.body.appendChild(container);
}
