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
      day.textContent = weekday[today + i];
    }

    // Icon Placeholder
    const icon = document.createElement("div");
    icon.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C16.5523 2 17 2.44772 17 3V5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5V3C15 2.44772 15.4477 2 16 2Z" fill="#F5BD52"/>
    <path d="M10.366 4.23999C10.0899 3.7617 9.47829 3.59782 9 3.87396C8.52171 4.15011 8.35783 4.7617 8.63397 5.23999L9.63398 6.97204C9.91012 7.45033 10.5217 7.61421 11 7.33807C11.4783 7.06192 11.6422 6.45033 11.366 5.97204L10.366 4.23999Z" fill="#F5BD52"/>
    <path d="M23 3.87397C23.4783 4.15012 23.6422 4.76171 23.366 5.24L22.366 6.97205C22.0899 7.45034 21.4783 7.61422 21 7.33808C20.5217 7.06193 20.3578 6.45034 20.634 5.97205L21.634 4.24C21.9101 3.76171 22.5217 3.59783 23 3.87397Z" fill="#F5BD52"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16C7 20.9706 11.0294 25 16 25ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z" fill="#F5BD52"/>
    <path d="M30 16C30 16.5523 29.5523 17 29 17H27C26.4477 17 26 16.5523 26 16C26 15.4477 26.4477 15 27 15H29C29.5523 15 30 15.4477 30 16Z" fill="#F5BD52"/>
    <path d="M27.75 10.371C28.2283 10.0949 28.3922 9.48329 28.116 9.005C27.8399 8.52671 27.2283 8.36283 26.75 8.63897L25.018 9.63897C24.5397 9.91512 24.3758 10.5267 24.6519 11.005C24.9281 11.4833 25.5397 11.6472 26.018 11.371L27.75 10.371Z" fill="#F5BD52"/>
    <path d="M3.88397 9C4.16012 8.52171 4.77171 8.35783 5.25 8.63397L6.98205 9.63397C7.46034 9.91012 7.62422 10.5217 7.34808 11C7.07193 11.4783 6.46034 11.6422 5.98205 11.366L4.25 10.366C3.77171 10.0899 3.60783 9.47829 3.88397 9Z" fill="#F5BD52"/>
    <path d="M17 27C17 26.4477 16.5523 26 16 26C15.4477 26 15 26.4477 15 27V29C15 29.5523 15.4477 30 16 30C16.5523 30 17 29.5523 17 29V27Z" fill="#F5BD52"/>
    <path d="M5 17C5.55228 17 6 16.5523 6 16C6 15.4477 5.55228 15 5 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H5Z" fill="#F5BD52"/>
    <path d="M7.33972 21C7.61586 21.4783 7.45199 22.0899 6.97369 22.366L5.24164 23.366C4.76335 23.6422 4.15176 23.4783 3.87562 23C3.59948 22.5217 3.76335 21.9101 4.24164 21.634L5.97369 20.634C6.45199 20.3578 7.06358 20.5217 7.33972 21Z" fill="#F5BD52"/>
    <path d="M11.3661 26.0264C11.6422 25.5481 11.4784 24.9365 11.0001 24.6603C10.5218 24.3842 9.91018 24.5481 9.63404 25.0264L8.63404 26.7584C8.35789 27.2367 8.52177 27.8483 9.00006 28.1244C9.47835 28.4006 10.0899 28.2367 10.3661 27.7584L11.3661 26.0264Z" fill="#F5BD52"/>
    <path d="M21 24.6603C21.4783 24.3842 22.0899 24.5481 22.366 25.0264L23.366 26.7584C23.6422 27.2367 23.4783 27.8483 23 28.1244C22.5217 28.4006 21.9101 28.2367 21.634 27.7584L20.634 26.0264C20.3578 25.5481 20.5217 24.9365 21 24.6603Z" fill="#F5BD52"/>
    <path d="M26.0263 20.634C25.548 20.3578 24.9364 20.5217 24.6603 21C24.3841 21.4783 24.548 22.0899 25.0263 22.366L26.7584 23.366C27.2366 23.6422 27.8482 23.4783 28.1244 23C28.4005 22.5217 28.2367 21.9101 27.7584 21.634L26.0263 20.634Z" fill="#F5BD52"/>
    </svg>
    `;

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
