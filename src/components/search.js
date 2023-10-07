import getProcessedWeather from "../getProcessedWeather";
import getWeather from "../getWeather";
import mainUi from "./main";

export default function search(apiKey, siUnitsEnable) {
  const preBgValue =
    document.documentElement.style.getPropertyValue("--bg-gradient-end");

  document.documentElement.style.setProperty("--bg-gradient-end", "#050505");

  const container = document.createElement("div");
  container.className = "search-container";

  const closeContainer = () => {
    container.style.opacity = 0;
    document.querySelector("html").classList.remove("stop-scroll");
    setTimeout(() => {
      container.remove();
    }, 750);
  };

  setTimeout(() => {
    container.style.background = "#050505";
  }, 1);

  const closeButton = document.createElement("div");
  closeButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  closeButton.className = "search-close-button";

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
      console.log(data)

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

  closeButton.addEventListener("click", () => {
    closeContainer();
    document.documentElement.style.setProperty("--bg-gradient-end", preBgValue);
  });

  container.append(searchBar, info, closeButton);

  document.body.appendChild(container);
}
