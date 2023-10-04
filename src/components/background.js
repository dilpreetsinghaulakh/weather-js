export default function background(condition) {
  const content = document.getElementById("content");

  const background = document.createElement("div");

  const backgroundGradient = document.createElement("div");
  backgroundGradient.className = "content-background-gradient";

  const image = document.createElement("img");
  image.className = "hero-image";
  image.src = "https://unsplash.com/photos/ROVBDer29PQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2MzUzODkxfA&force=true"; // Clouds

  // image.src ="https://unsplash.com/photos/kCWKTI7OLQg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGNsZWFyJTIwc2t5fGVufDB8fHx8MTY5NjM0NjE0NXww"; // Clear Landscape

  // image.src ="https://unsplash.com/photos/E0e1NmVclRo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGZvZ3xlbnwwfHx8fDE2OTYzOTIxODF8MA&force=true"; // Fog

  background.append(backgroundGradient, image);

  content.append(background);
}
