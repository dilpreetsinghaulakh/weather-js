export function closeOverlay() {
  document.querySelector(".overlay-container").style.opacity = 0;
  document.querySelector("html").classList.remove("stop-scroll");
  setTimeout(() => {
    document.querySelector(".overlay-container").remove();
  }, 750);
}

export default function overlay(color, ...args) {
  const preBgValue =
    document.documentElement.style.getPropertyValue("--bg-gradient-end");

  document.documentElement.style.setProperty("--bg-gradient-end", color);

  setTimeout(() => {
    document.querySelector("html").classList.add("stop-scroll");
  }, 750);
  scrollTo(0, 0);

  const container = document.createElement("div");
  container.className = "overlay-container";

  setTimeout(() => {
    container.style.background = color;
  }, 1);

  const closeButton = document.createElement("div");
  closeButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  closeButton.className = "overlay-close-button";

  closeButton.addEventListener("click", () => {
    closeOverlay();
    document.documentElement.style.setProperty("--bg-gradient-end", preBgValue);
  });

  args.forEach((ele) => {
    container.appendChild(ele);
  });

  container.append(closeButton);

  document.body.appendChild(container);
}
