export default function source() {
  const container = document.createElement("div");
  container.className = "source-container";

  container.innerHTML = `Powered by <a target="black" href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>`;

  return container;
}
