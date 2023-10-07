export default function gridItems(data) {
  const container = document.createElement("div");
  container.className = "grid-container";

  let gridItems = {};

  if (JSON.parse(localStorage.getItem("siUnitsEnabled"))) {
    gridItems = {
      "Feels Like": data.feelsLike + "°",
      Precipitation: data.precipitation + " mm",
      Humidity: data.humidity + "%",
      UV: data.uv,
      Visibility: data.visibility + " km",
      Pressure: data.pressure + " mbar",
    };
  } else {
    gridItems = {
      "Feels Like": data.feelsLike + "°",
      Precipitation: data.precipitation + " in",
      Humidity: data.humidity + "%",
      UV: data.uv,
      Visibility: data.visibility + " mi",
      Pressure: data.pressure + " in",
    };
  }

  for (var item in gridItems) {
    const card = document.createElement("div");
    card.className = "grid-item-card";

    const title = document.createElement("p");
    title.textContent = item;
    title.className = "grid-card-title";

    const itemData = document.createElement("p");
    itemData.textContent = gridItems[item];
    itemData.className = "grid-card-data";

    card.append(title, itemData);

    container.appendChild(card);
  }

  // Wind will be added in an awesome way

  return container;
}
