

function clickSearchBtn() {
   let SearchField = document.getElementById("location-search");
  let city = SearchField.value;
   let geoLat = 43.5789;
   let geoLon = 79.6583;
   let weatherInfo = {name: "weatherApp"};
   //const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLat}&lon=${geoLon}&appid=${apiKey}`;
   
   const sunnyimg = "https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
   const cloudyimg = "https://static.vecteezy.com/system/resources/previews/000/441/101/original/cloudy-vector-icon.jpg";
   const rainyimg = "https://png.pngtree.com/png-clipart/20200225/original/pngtree-rain-icon-creative-design-template-png-image_5259110.jpg";
   const snowyimg = "https://previews.123rf.com/images/oldwhitewolf/oldwhitewolf1606/oldwhitewolf160600007/58313312-fully-snowy-icon-template-glossy-blue-cloud-object-glossy-blue-snowflakes-objects-snowy-icon.jpg";
   let currentDate = new Date(); //gets current date;
   let currentDayDate = currentDate.getDate();
   let currentMonth = (currentDate.getMonth()+1);
   let currentYear = (currentDate.getFullYear() % 100);
   document.getElementById(`currentdate`).innerHTML = currentDate;

   //retrieve api and convert with json
   const apiKey = '80b66692cc83d65b511d9584d9a227b7';
   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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
      weatherInfo.country = data.country;
      geoLat = data.coord.lat;
      geoLon = data.coord.lon;
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
     console.log(`Humidity: ${weatherInfo.humid}%`);
     console.log(`Wind Gusts: ${weatherInfo.wind}km/H`);
     //      console.log(`Windspeed: ${weatherInfo.windSpd}km/h`);
     //      console.log(weatherInfo.pop);
     //} 
     
      function generateCards(cardNumber) {
         let generatedDate = document.getElementById(`card${cardNumber}-date`);
         console.log(`date is ${generatedDate.value}`);
         console.log(`${currentDayDate}/${currentMonth}/${currentYear}`);
         generatedDate.innerHTML = currentDate;
         let SearchField = document.getElementById("location-search");
         city = SearchField.value;
         let setCity = document.getElementById("currentlocation");
         setCity.innerHTML = city;
         let setCurrentTemp = document.getElementById("currenttemp");
         setCurrentTemp.innerHTML = `${weatherInfo.temp}C`;
         let setCurrentDesc = document.getElementById("currentdesc");
         setCurrentDesc.innerHTML = weatherInfo.desc;
         let setCurrentHumid = document.getElementById("currenthumidity");
         setCurrentHumid.innerHTML = `Humidity: ${weatherInfo.humid}%`;
         let setCurrentWind = document.getElementById("currentwind");
         setCurrentWind.innerHTML = `Wind Gusts: ${weatherInfo.wind}km/H`;
         let setCurrentImg = document.getElementById("currentimg");
         if (weatherInfo.desc === "Clouds") {
            setCurrentImg.src = cloudyimg;
         } else if (weatherInfo.desc === "Clear") {
            setCurrentImg.src = sunnyimg;
         } else if (weatherInfo.desc === "Rain") {
            setCurrentImg.src = rainyimg;
         } else if (weatherInfo.desc === "Snowy") {
            setCurrentImg.src = snowyimg;
         }
         //setCurrentImg.src = sunnyimg;
         console.log(`date is ${generatedDate.value}`);
         console.log(currentDate);
         generatedDate.innerHTML = `${currentDayDate+cardNumber}/${currentMonth}/${currentYear}`;
      }
      generateCards(1); 
//}
let currentWeather = sunnyimg;
if(weatherInfo.desc === "Clouds") {
currentWeather = cloudyimg;
} else if(weatherInfo.desc === "Rain") {
   currentWeather = rainyimg;
} else if(weatherInfo.desc === "Snow") {
   currentWeather = snowyimg;
const loadWeatherCardData = (date, icon, temp, wind, humidity) =>  console.log(date, icon, temp, wind, humidity);


/* let srchBtn = document.getElementById('search-button');
      srchBtn.onclick = function clickedButton() {
         console.log('hello');
         loadWeatherCardData(weatherInfo.name, currentWeather, weatherInfo.temp, weatherInfo.wind, weatherInfo.humid);
         createCard(Card1);
      } */
      
   console.log(weatherInfo);
}
})
};
//const srchBtn = document.getElementById("search-button");
document.addEventListener("click", clickSearchBtn);
