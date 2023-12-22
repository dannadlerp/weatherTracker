let currentDate = new Date(); //gets current date;
let currentDayDate = currentDate.getDate();
let currentMonth = (currentDate.getMonth()+1);
let currentYear = (currentDate.getFullYear() % 100);
document.getElementById(`currentdate`).innerHTML = currentDate;


function clickSearchBtn() {
   let SearchField = document.getElementById("location-search");
   let city = SearchField.value;
   let geoLat = 43.5789;
   let geoLon = 79.6583;
   let weatherInfo = {name: "weatherApp"};
   const sunnyimg = "https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
   const cloudyimg = "https://static.vecteezy.com/system/resources/previews/000/441/101/original/cloudy-vector-icon.jpg";
   const rainyimg = "https://png.pngtree.com/png-clipart/20200225/original/pngtree-rain-icon-creative-design-template-png-image_5259110.jpg";
   const snowyimg = "https://cdn-icons-png.flaticon.com/512/1779/1779932.png";
   const fogimg = "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png";
   
   //retrieve api and convert with json if search field is not empty
   if (city != "") {
      const apiKey = '80b66692cc83d65b511d9584d9a227b7';
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      
   fetch(apiURL)
   .then(function (response) {
      return response.json();
   })
   
   .then(function (data) {
               
         console.log(data);
         weatherInfo.cityName = data.name;
         weatherInfo.temp = Math.ceil(data.main.temp-273.15);
         weatherInfo.wind = data.wind.speed;
      weatherInfo.humid = data.main.humidity;
      weatherInfo.country = data.country;
      geoLat = data.coord.lat;
      geoLon = data.coord.lon;
      const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLat}&lon=${geoLon}&appid=${apiKey}`;

      fetch(apiURL2)
         .then(function (response2) {
         return response2.json();
          })
   
         .then(function (data) {
         console.log(data);
         })
         //if cardnumber 1 = 6, 2 = 14 , 3 = 22 , 4 = 30 , 5 = 38
     
   // weatherInfo.tempFut = `${data.list[cardNumber].main.temp}C`;
   //weatherInfo.humidFut = `${data.list[cardNumber].main.humidity}% Humid.`;
   //weatherInfo.descFut = data.list[cardNumber].weather[0].main;
   //weatherInfo.windFut = `${data.list[cardNumber].wind.gust}km/h`;
   //console.log(weatherInfo.tempFut);
     console.log(weatherInfo.desc);
     console.log(`Humidity: ${weatherInfo.humid}%`);
     console.log(`Wind Gusts: ${weatherInfo.wind}km/H`);
     //      console.log(`Windspeed: ${weatherInfo.windSpd}km/h`);
     //      console.log(weatherInfo.pop);
     //} 
     
      function generateCards(cardNumber) {
         let futureDate = new Date(currentDate); //gets future date;
         futureDate.setDate(currentDate.getDate() + cardNumber);
let futureDayDate = futureDate.getDate();
let futureMonth = (futureDate.getMonth()+1);
let futureYear = (futureDate.getFullYear() % 100);
         let generatedDate = document.getElementById(`card${cardNumber}-date`);
//         console.log(`date is ${generatedDate.value}`);
 //        console.log(`${futureDayDate}/${futureMonth}/${futureYear}`);
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
         } else if (weatherInfo.desc === "Snow") {
            setCurrentImg.src = snowyimg;
         } else if (weatherInfo.desc === "Fog" || "Mist") {
            setCurrentImg.src = fogimg;
         }
 //           console.log(`date is ${generatedDate.value}`);
 //        console.log(futureDate);
         generatedDate.innerHTML = `${currentDayDate+cardNumber}/${currentMonth}/${currentYear}`;
      }

      generateCards(1);
      generateCards(2);
      generateCards(3);
      generateCards(4);
      generateCards(5);
/* let currentWeather = sunnyimg;
if(weatherInfo.desc === "Clouds") {
currentWeather = cloudyimg;
} else if(weatherInfo.desc === "Rain") {
   currentWeather = rainyimg;
} else if(weatherInfo.desc === "Snow") {
   currentWeather = snowyimg;
const loadWeatherCardData = (date, icon, temp, wind, humidity) =>  console.log(date, icon, temp, wind, humidity);

   console.log(weatherInfo);
} */
})
};
}
const srchBtn = document.getElementById("search-button");
srchBtn.addEventListener("click", clickSearchBtn);
