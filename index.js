let geoLat = 43.5789;
let geoLon = 79.6583;
const apiKey = '80b66692cc83d65b511d9584d9a227b7';
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLat}&lon=${geoLon}&appid=${apiKey}`;
let weatherInfo = {name: "weatherApp"};
let hour = 21;

//retrieve api and convert with json
 fetch(apiURL)
 .then(function (response) {
    return response.json();
 })

 .then(function (data) {
   weatherInfo.cityName = data.city.name;
   weatherInfo.coord = data.city.coord;
   weatherInfo.country = data.city.country;
   weatherInfo.weatherArray = data.list;
   weatherInfo.dateTime = data.list[hour].dt_txt;
   weatherInfo.pop = data.list[hour].pop;
   weatherInfo.weather = data.list[hour].weather;
   weatherInfo.desc = data.list[hour].weather[0].main;
   weatherInfo.detail = data.list[hour].weather[0].description;
   weatherInfo.windDegrees = data.list[hour].wind.deg;
   weatherInfo.windGust = data.list[hour].wind.dgust;
   weatherInfo.windSpd = data.list[hour].wind.speed;
   console.log(data);
   function displayWeatherInfo() {
      console.log(weatherInfo.cityName);
      console.log(weatherInfo.dateTime);
      console.log(`${100*weatherInfo.pop}% POP`);
      console.log(weatherInfo.detail);
      console.log(`Windspeed: ${weatherInfo.windSpd}km/h`);
   }
})
console.log(weatherInfo.pop);

/* if (length(data) === 0) {
} else {}
console.log('nothing returned'); //checks a value has been returned
}
)
console.log(weatherInfo); */

 document.getElementById("weather-info").textContent = [weatherInfo.cityName, weatherInfo.detail, `Weather is: ${weatherInfo.desc}`];
document.getElementById("search-button").onclick
console.log(weatherInfo);