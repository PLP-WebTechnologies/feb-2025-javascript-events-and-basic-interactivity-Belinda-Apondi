let todaysDate = new Date();
let todaysTime = todaysDate.getHours();
if (todaysTime < 10) {
  todaysTime = `0${todaysTime}`;
}
let todaysMin = todaysDate.getMinutes();
if (todaysMin < 10) {
  todaysMin = `0${todaysMin}`;
}
let toDay = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let thisDay = document.querySelector(".one");
thisDay.innerHTML = toDay[todaysDate.getDay()];

let thisDate = document.querySelector(".two");
thisDate.innerHTML = `${todaysTime}:${todaysMin}`;

function currentWeather(response) {
  let actual = document.querySelector(".current-temperature-value");
  actual.innerHTML = Math.round(response.data.temperature.current);
  let actualHumidity = document.querySelector("#humid");
  actualHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  let actualWind = document.querySelector("#windy");
  actualWind.innerHTML = `${response.data.wind.speed.toFixed(1)}m/s`;
  let actualExplanation = document.querySelector("#explanation");
  actualExplanation.innerHTML = response.data.condition.description;
  let imageIcon = document.querySelector(".current-temperature-icon");
  imageIcon.innerHTML = `<img src="${response.data.condition.icon_url}">`

  
}
function myCity(event, theCityValue = "Nairobi") {
   if (event) event.preventDefault();

   theCityValue = document.querySelector(".search-input").value.trim()|| theCityValue;
  let theCityValueTwo = document.querySelector("#current-city");
  theCityValueTwo.innerHTML = theCityValue.charAt(0).toUpperCase() + theCityValue.slice(1);

  let apiKey = "2284b36a4b14fat02fd5f23o7025e19a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${theCityValue}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(currentWeather);
}

let myValue = document.querySelector("#city");
myValue.addEventListener("submit", myCity);
document.addEventListener("DOMContentLoaded", function () {
  myCity(null, "Nairobi")});