import getProcessedWeather from "../getProcessedWeather";
import about from "./about";
import mainUi from "./main";
import overlay, { closeOverlay } from "./overlay";

export default function settings() {
  const units = document.createElement("div");
  units.className = "units-selector-settings";

  const unitsP = document.createElement("p");
  unitsP.textContent = "Units";

  const selector = document.createElement("div");
  selector.className = "selector-units-settings";

  const slide = document.createElement("div");
  slide.className = "side-units-settings";

  const first = document.createElement("p");
  first.textContent = "Metric";

  const second = document.createElement("p");
  second.textContent = "Imperial";

  selector.append(slide, first, second);

  units.append(unitsP, selector);

  overlay("#050505", units, about());

  slide.style.width = selector.offsetWidth / 2 + "px";

  setTimeout(() => {
    slide.style.transition = "all 150ms cubic-bezier(0.075, 0.82, 0.165, 1)";
  }, 1);

  if (JSON.parse(localStorage.getItem("siUnitsEnabled"))) {
    slide.style.translate = "-45%";
  } else {
    slide.style.translate = "45%";
  }

  selector.addEventListener("click", () => {
    const preValue = JSON.parse(localStorage.getItem("siUnitsEnabled"));
    if (preValue) {
      localStorage.setItem("siUnitsEnabled", false);
      slide.style.translate = "44%";
    } else {
      localStorage.setItem("siUnitsEnabled", true);
      slide.style.translate = "-44%";
    }

    mainUi(
      getProcessedWeather(
        JSON.parse(localStorage.getItem("siUnitsEnabled")),
        JSON.parse(sessionStorage.getItem("data"))
      )
    );

    setTimeout(() => {
      closeOverlay();
    }, 160);
  });
}
