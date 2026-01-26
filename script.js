const btn = document.getElementById("btn");
const cityInput = document.getElementById("city");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const API_KEY = "123e5940f08006f5e3ff79ee03c9fecf";

btn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Enter city name");
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      alert("City not found");
      return;
    }

    const data = await response.json();

    cityName.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    description.innerText = data.weather[0].description;
    humidity.innerText = data.main.humidity;
    wind.innerText = data.wind.speed;

  } catch (error) {
    alert("Network error");
    console.error(error);
  }
}
