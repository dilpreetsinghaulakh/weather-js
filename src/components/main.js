import background from "./background";
import heroSection from "./heroSection";

export default function mainUi(processedWeather) {
  const content = document.getElementById("content");

  const innerContent = document.createElement("div");
  innerContent.className = "inner-content";

  innerContent.append(
    heroSection({
      city: processedWeather.location.name,
      temp: processedWeather.current.temp,
      condition: processedWeather.current.condition,
      hi: Math.round(processedWeather.days[1].maxTemp),
      low: Math.round(processedWeather.days[1].minTemp),
    })
  );

  content.append(background(), innerContent);
}
