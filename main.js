const apiKey = "3d496777620009e5d6622047eb28da67";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".details").style.display = "none";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".hummidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/cloud1.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear1.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain1.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle1.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow1.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist1.png";
    } else if (data.weather[0].main === "Dust") {
      weatherIcon.src = "images/clear1.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
