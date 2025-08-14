function displayWeather(response) {
  let iconElement = document.querySelector(".current-temperature-icon");
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#current-temperature");
  let humidityElement = document.querySelector("#current-humidity");
  let windSpeedElement = document.querySelector("#current-wind");
  let descriptionElement = document.querySelector("#current-description");
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();

  let description = response.data.condition.description;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let windSpeed = Math.round(response.data.wind.speed);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${description}"/>`;
  currentDateELement.innerHTML = formatDate(currentDate);
  cityElement.textContent = response.data.city;
  descriptionElement.textContent = description;
  temperatureElement.textContent = temperature;
  humidityElement.textContent = `${humidity}%`;
  windSpeedElement.textContent = `${windSpeed}km/h`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  searchCity(city);
  searchInputElement.value = "";
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);
searchCity("Paris");
