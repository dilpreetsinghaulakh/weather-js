import getProcessedWeather from "../getProcessedWeather";
import getWeather from "../getWeather";
import mainUi from "./main";
import overlay, { closeOverlay } from "./overlay";

export default function search(apiKey) {
  const searchBar = document.createElement("div");
  searchBar.className = "searchbar-search";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Location";
  input.className = "search-input-search";

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.className = "search-button-search";

  const loading = document.createElement("p");
  loading.textContent = "Loading...";
  loading.className = "loading-search";

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
        closeOverlay();
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
  info.className = "info-search";

  overlay("#050505", searchBar, loading, info);
}
