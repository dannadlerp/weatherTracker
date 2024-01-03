let existingResults = localStorage.getItem('FavouriteWeatherSearches');
let currentDate = new Date(); //gets current date;
let currentDayDate = currentDate.getDate();
let currentMonth = (currentDate.getMonth()+1);
let currentYear = (currentDate.getFullYear() % 100);
document.getElementById(`currentdate`).innerHTML = currentDate;
city = document.getElementById("location-search").value;
function populateSrchHistory() {
   if(document.getElementById("location-search").value !== "") {
      if(existingResults.length === 5) {
         console.log("history item removed");
         existingResults.pop()
         existingResults = [city, existingResults[0], existingResults[1], existingResults[2], existingResults[3]];
      }
   }
   
   document.getElementById("history-1").innerHTML = existingResults[0];
   document.getElementById("history-2").innerHTML = existingResults[1];
   document.getElementById("history-3").innerHTML = existingResults[2];
   document.getElementById("history-4").innerHTML = existingResults[3];
   document.getElementById("history-5").innerHTML = existingResults[4];
   console.log(existingResults);
   //else {existingResults = [existingResults[0], existingResults[1], existingResults[2], existingResults[3], existingResults[4]];}
         
}


function clickSearchBtn() { //runs all processes when search button is clicked
   let unixDate = currentDate.getTime(); //gets unix startdate timestamp
   let futUnixDate = (unixDate + 732000); //5 days in future
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
   

existingResults.pop();//testing//

   //retrieve api and convert with json if search field is not empty
   if (city != "") {
      const apiKey = '80b66692cc83d65b511d9584d9a227b7';
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&start=${unixDate}&end=${futUnixDate}&appid=${apiKey}`;
      
   fetch(apiURL)
   .then(function (response) {
      return response.json();
   })
   
   .then(function (data) {
               
         console.log(data);
         weatherInfo.cityName = data.name;
         weatherInfo.temp = Math.ceil(data.main.temp-273.15);
         weatherInfo.wind = data.wind.speed;
         weatherInfo.desc = data.weather[0].main;
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
         
         console.log(weatherInfo.desc);
         console.log(`Humidity: ${weatherInfo.humid}%`);
         console.log(`Wind Gusts: ${weatherInfo.wind}km/H`);
         
      function generateCards(cardNumber) {
         let futureDate = new Date(); //gets current date;

         futureDate.setDate(currentDate.getDate() + cardNumber);
         let futDateListNmb = 0;

         if(cardNumber === 1) {futDateListNmb = 6} //determines list number for date based on card number
         else if(cardNumber === 2) {futDateListNmb = 14}
         else if(cardNumber === 3) {futDateListNmb = 22}
         else if(cardNumber === 4) {futDateListNmb = 30}
         else if(cardNumber === 5) {futDateListNmb = 38};
         
         //populate generated cards with future data
         /* weatherInfo.tempFut = `${data.list[futDateListNmb].main.temp}C`;
         weatherInfo.humidFut = `${data.list[futDateListNmb].main.humidity}% Humid.`;
         weatherInfo.descFut = data.list[futDateListNmb].weather[0].main;
         weatherInfo.windFut = `${data.list[futDateListNmb].wind.gust}km/h`;
         console.log(weatherInfo.tempFut)
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
         } */


          //2 = 14 , 3 = 22 , 4 = 30 , 5 = 38
   // weatherInfo.tempFut = `${data.list[cardNumber].main.temp}C`;
   //weatherInfo.humidFut = `${data.list[cardNumber].main.humidity}% Humid.`;
   //weatherInfo.descFut = data.list[cardNumber].weather[0].main;
   //weatherInfo.windFut = `${data.list[cardNumber].wind.gust}km/h`;
   //console.log(weatherInfo.tempFut);
   
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
         localStorage.setItem('FavouriteWeatherSearches', existingResults);
 //           console.log(`date is ${generatedDate.value}`);
 //        console.log(futureDate);
         generatedDate.innerHTML = `${currentDayDate+cardNumber}/${currentMonth}/${currentYear}`;
      }

      
         console.log("Search item saved to local storage")
         localStorage.setItem('FavouriteWeatherSearches', existingResults);
         populateSrchHistory();
         
         console.log(existingResults);
         
         //const createLi = document.createElement('li');
         //createLi.textContent = city;
         //let searchHistList = document.getElementById("history-list");
         //let searchHistory = JSON.parse(localStorage.getItem(''));
//         searchHistory.innerHTML = searchRsltsArray;
         //searchHistList.appendChild(createLi);
      generateCards(1);
      generateCards(2);
      generateCards(3);
      generateCards(4);
      generateCards(5);

})
};
}
populateSrchHistory();
const srchBtn = document.getElementById("search-button");
srchBtn.addEventListener("click", clickSearchBtn);
