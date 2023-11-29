const input = document.querySelector(".user-input");
const search = document.querySelector(".search-img");
const degree = document.querySelector(".degree");
const img = document.querySelector(".climate-img");
const humidityInfo = document.querySelector(".humidity-info");
const airInfo = document.querySelector(".wind-info");
const cityName = document.querySelector(".heading");

// const key = "7db601c92baa04abdbb8586f0293fbe1";

// Getting Data
async function data() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=7db601c92baa04abdbb8586f0293fbe1&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("error");
      return;
    }

    const data = await response.json();
    console.log(data);
    // Displaying data
    cityName.textContent = data.name;
    degree.textContent = `${data.main.temp}°C`;
    airInfo.textContent = `${data.wind.speed} KM/H`;
    humidityInfo.textContent = `${data.main.humidity}%`;

    img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  } catch (error) {
    console.error(error);
  }
}

// Getting UserInput

// Handle Submit
search.addEventListener("click", () => {
  data();
});
