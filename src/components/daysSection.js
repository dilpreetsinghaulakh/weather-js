import icons from "./icons";

export default function daysSection(data) {
  const container = document.createElement("div");
  container.className = "days-container";

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date().getDay();

  for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.className = "days-card";

    const day = document.createElement("p");
    day.className = "days-card-day";

    if (i === 0) {
      day.textContent = "Today";
    } else {
      if (today + i > 6) {
        day.textContent = weekday[(today + i) - 7];
      } else {
        day.textContent = weekday[today + i];
      }
    }

    const icon = document.createElement("div");
    icon.innerHTML = icons(data[i].conditionCode);

    const avgTemp = document.createElement("p");
    avgTemp.textContent = Math.round(data[i].avgTemp) + "°";
    avgTemp.className = "days-avg-temp";

    const tempRange = document.createElement("span");
    tempRange.className = "days-temp-range";

    const minTemp = document.createElement("p");
    minTemp.textContent = Math.round(data[i].minTemp) + "°";

    const maxTemp = document.createElement("p");
    maxTemp.textContent = Math.round(data[i].maxTemp) + "°";

    const dash = document.createElement("p");
    dash.textContent = "-";

    tempRange.append(minTemp, dash, maxTemp);

    card.append(day, icon, avgTemp, tempRange);

    container.appendChild(card);
  }

  return container;
}
