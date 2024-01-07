const key = "7db601c92baa04abdbb8586f0293fbe1";
const url = "https://api.openweathermap.org/data/2.5/weather";
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity-info');
const wind = document.querySelector('.wind-info');
const input = document.getElementById('search');
const searchImg = document.querySelector('.search-img');
const cityName = document.querySelector('.city-name');
const cityTemp = document.querySelector('.city-temp');

searchImg.addEventListener('click',()=>{
    const city = input.value;
    if(city){
        const userUrl = `${url}?q=${city}&appid=${key}`;
        getWeatherData(userUrl);
    }
   
})



async function getWeatherData(url){
    const data = await fetch(url);
    const response = await data.json();
    if(response.status ===404){
        temp.textContent.textContent = 'City Not Found!';
    }
    console.log(response)
    updateDOM(response)
}

function updateDOM(info) {
    cityName.textContent = info.name;
    temp.textContent = `${Math.floor(info.main.temp - 273.15)}°C`;
    humidity.textContent = `${info.main.humidity}%`;
    wind.textContent = `${info.wind.speed} Km/h`;
}

const defaultCity = "vadodara"; 
const defaultUrl = `${url}?q=${defaultCity}&appid=${key}`;
getWeatherData(defaultUrl);