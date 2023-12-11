let geoLat = 43.5789;
let geoLon = 79.6583;
let city = "Mississauga";
const apiKey = '80b66692cc83d65b511d9584d9a227b7';
//const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLat}&lon=${geoLon}&appid=${apiKey}`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
let weatherInfo = {name: "weatherApp"};
let hour = 21;
 let cityVar = document.getElementById=("weather-info").textContent;

//retrieve api and convert with json
fetch(apiURL)
.then(function (response) {
   return response.json();
})

.then(function (data) {
   //function searchCityInfo(params) {

   console.log(data);
      weatherInfo.cityName = data.name;
      weatherInfo.temp = Math.ceil(data.main.temp-273.15);
      weatherInfo.wind = data.wind.speed;
      weatherInfo.humid = data.main.humidity;
      geoLat = data.coord.lat;
      geoLon = data.coord.lon;
   weatherInfo.country = data.country;
   //weatherInfo.weatherArray = data.list;
   //weatherInfo.dateTime = data.list[hour].dt_txt;
  // weatherInfo.pop = data.list[hour].pop;
     weatherInfo.desc = data.weather[0].main;
//   weatherInfo.detail = data.list[hour].weather[0].description;
//   weatherInfo.windDegrees = data.list[hour].wind.deg;
//   weatherInfo.windGust = data.list[hour].wind.dgust;
//   weatherInfo.windSpd = data.list[hour].wind.speed;
//   function displayWeatherInfo() {  
      console.log(weatherInfo.cityName);
      console.log(`${weatherInfo.temp}C`);
      console.log(weatherInfo.desc);
      console.log(`Humidity: ${weatherInfo.wind}%`);
      console.log(`Wind Gusts: ${weatherInfo.wind}km/H`);
//      console.log(`Windspeed: ${weatherInfo.windSpd}km/h`);
//      console.log(weatherInfo.pop);

      document.getElementById("weather-info").textContent = [weatherInfo.temp, weatherInfo.detail, `Weather is: ${weatherInfo.desc}`];
   //}
const srchBtn = document.getElementById("search-button");

console.log(weatherInfo);
//}
})
