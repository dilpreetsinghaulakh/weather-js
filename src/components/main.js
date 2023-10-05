import background from "./background";
import daysSection from "./daysSection";
import gridItems from "./grid";
import heroSection from "./heroSection";
import source from "./source";

export default function mainUi(processedWeather, siUnitsEnable) {
  const content = document.getElementById("content");
  console.log(processedWeather);

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
    gridItems(processedWeather.current, siUnitsEnable),
    source()
  );

  content.append(background(), innerContent);
}
