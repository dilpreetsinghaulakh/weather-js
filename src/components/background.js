export default function background(condition) {
  const background = document.createElement("div");
  background.className = "content-background-container";

  const backgroundGradient = document.createElement("div");
  backgroundGradient.className = "content-background-gradient";

  const image = document.createElement("img");
  image.className = "hero-image";
  image.src = "https://unsplash.com/photos/ROVBDer29PQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2MzUzODkxfAe"; // Clouds

  // image.src ="https://unsplash.com/photos/kCWKTI7OLQg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGNsZWFyJTIwc2t5fGVufDB8fHx8MTY5NjM0NjE0NXww"; // Clear Landscape

  // image.src ="https://unsplash.com/photos/E0e1NmVclRo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGZvZ3xlbnwwfHx8fDE2OTYzOTIxODF8MA"; // Fog

  // image.src = "https://unsplash.com/photos/qVotvbsuM_c/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8fHwxNjk2NDIwMjY5fDA"; // Clear Night Sky

  // image.src = "https://unsplash.com/photos/8RRqtEeqXSU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fGNsb3VkeSUyMG5pZ2h0JTIwc2t5fGVufDB8fHx8MTY5NjQyNDIzN3ww" // Cloudy Night

  background.append(backgroundGradient, image);

  return background;
}
