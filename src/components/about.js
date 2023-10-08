export default function about() {
  const container = document.createElement("div");
  container.className = "container-about";

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About";

  const textWrapper = document.createElement("div");
  textWrapper.className = "text-wrapper-about";

  const p = document.createElement("p");
  p.innerHTML = `This is a JavaScript weather web page and uses <a target="black" href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>.<br>
  Any information collected by this page (location data) will not be stored anywhere by us except temporarily on the device for processing but will be sent to WeatherAPI.com to get weather data. 
  We have no control over, and are not responsible for, the privacy policies and practices of any third party that is WeatherAPI.com.<br>
  You may check WeatherAPI.com's <a target="black" href="https://www.weatherapi.com/terms.aspx" >Terms and Conditions</a> and <a target="black" href="https://www.weatherapi.com/privacy.aspx">Privacy Policy</a>.`;

  textWrapper.appendChild(p);

  container.append(aboutTitle, textWrapper);

  aboutTitle.addEventListener("click", () => {
    setTimeout(() => {
      container.classList.toggle("about-open");
    }, 50);
    if (textWrapper.offsetWidth) {
      setTimeout(() => {
        textWrapper.style.width = "0";
      }, 50);
    } else {
      textWrapper.style.width = "100%";
    }
  });

  return container;
}
