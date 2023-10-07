import getProcessedWeather from "../getProcessedWeather";
import getWeather from "../getWeather";
import mainUi from "./main";
import overlay from "./overlay";

export default function search(apiKey, siUnitsEnable) {
  const searchBar = document.createElement("div");
  searchBar.className = "searchbar-search";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Location";
  input.className = "search-input-search";

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.className = "search-button-search";

  searchButton.addEventListener("click", () => {
    getWeather(apiKey, input.value)
      .then((data) => {
        mainUi(getProcessedWeather(siUnitsEnable, data), siUnitsEnable);
        closeContainer();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  searchBar.append(input, searchButton);

  const info = document.createElement("p");
  info.textContent =
    "Please enter full name (like Stuttgart), or abbreviation (like NYC), or coordinates by a comma (latitude, longitude) of the location that you want to search.";
  info.className = "info-search";

  overlay("#050505", searchBar, info);
}
