export default function heroSection(data) {
  const container = document.createElement("div");
  container.className = "hero-container";

  const city = document.createElement("p");
  city.textContent = data.city;
  city.className = "hero-row1-city";

  const temp = document.createElement("p");
  temp.textContent = data.temp + "°";
  temp.className = "hero-temp";

  const condition = document.createElement("p");
  condition.innerText = data.condition;
  condition.className = "hero-condition";

  const lastRow = document.createElement("p");
  lastRow.textContent = `Hi ${data.hi}° | Low ${data.low}°`;
  lastRow.className = "hero-last-row"

  container.append(city, temp, condition, lastRow);

  return container;
}
