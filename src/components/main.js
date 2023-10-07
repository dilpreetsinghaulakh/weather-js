import background from "./background";
import daysSection from "./daysSection";
import gridItems from "./grid";
import heroSection from "./heroSection";
import source from "./source";

export default function mainUi(processedWeather) {
  const content = document.getElementById("content");

  if (content.hasChildNodes) {
    content.innerHTML = "";
  }

  const innerContent = document.createElement("div");
  innerContent.className = "inner-content";

  innerContent.append(
    heroSection({
      city: processedWeather.location.name,
      temp: Math.round(processedWeather.current.temp),
      condition: processedWeather.current.condition,
      hi: Math.round(processedWeather.days[1].maxTemp),
      low: Math.round(processedWeather.days[1].minTemp),
    }),
    daysSection(processedWeather.days),
    gridItems(processedWeather.current, JSON.parse(localStorage.getItem("siUnitsEnabled"))),
    source()
  );

  content.append(
    background(
      processedWeather.current.conditionCode,
      processedWeather.current.isDay
    ),
    innerContent
  );
}
