import background from "./background";
import heroSection from "./heroSection";

export default function mainUi(processedWeather) {
  const content = document.getElementById("content");

  console.log(processedWeather);

  const innerContent = document.createElement("div");
  innerContent.className = "inner-content";

  content.append(background(), innerContent);
}
