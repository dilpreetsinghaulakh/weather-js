export default async function getLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return [latitude, longitude];
  } catch (error) {
    return "error";
  }
}
