searchButton.addEventListener("click", function () {
  alert("clicked!");
// api key
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.929430&lon=-80.789030&appid=fd0ecc2f8de4f77fb50045960ded2319')
  .then(response => response.json())
  .then(data => {
    currentWeatherDay(data);
    createWeatherDays(data.forecast.forecastday);
    // store weather data in local storage
    localStorage.setItem('weatherData', JSON.stringify(data));
  })
  // .catch(error => console.error(error));
// retrieve weather data from local storage
var storedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
  
  var data = [
    {
      city: "charlotte",
      date: "03/19/2023",
      temp: 60,
      wind: 25,
      humidity: 30,
    },
    //  can add in dates to teh ones below
    {
      date: "03/19/2023",
      temp: 60,
      wind: 65,
      humidity: 60,
    },
    {
      date: "3/19/2023",
      temp: 70,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/19/2023",
      temp: 80,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/19/2023",
      temp: 80,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/19/2023",
      temp: 80,
      wind: 45,
      humidity: 10,
    },
  ];

   // if weather data is not available in local storage, use default data
   if (!storedWeatherData) {
    storedWeatherData = data;
  }

  //   call var data= getWeatherData()   this is calling the api server
  currentWeatherDay(data[0]);
  // uncommenting line 48 made them go back on screen
  createWeatherDays(data);
});




function currentWeatherDay(currentWeather) {

 
  var currentWeatherDiv = document.querySelector(".mainBox");
  // <h1>display city</h1>
  // <p>display date</p>
  // <p>display temp</p>
  // <p>display wind</p>
  // <p>display humidity</p>
  var card = document.querySelector(".forecast"); //took out forecast
card.innerHTML = '';

  var tempElement = document.createElement("p");
  tempElement.textContent = `temp: ${currentWeather.temp}`;
  var windElement = document.createElement("p");
  windElement.textContent = `wind: ${currentWeather.wind}`;
  var humidityElement = document.createElement("p");
  humidityElement.textContent = `humidity: ${currentWeather.humidity}`;
  var cityElement = document.createElement("h1");
  cityElement.textContent = `city: ${currentWeather.city}`;
  var dateElement = document.createElement("p");
  dateElement.textContent = `date: ${currentWeather.date}`;
  card.append(cityElement);
  card.append(dateElement);
  card.append(tempElement);
  card.append(windElement);
  card.append(humidityElement);
  // currentWeatherDiv.append(card);

 
}

function createWeatherDays(weatherDataArray) {
//  put the empty here and (append then empty out side the 4 loop)
var fiveDayForecastDiv = document.querySelector(".fiveDayForecast");

fiveDayForecastDiv.innerHTML = ""; // clear the container element
console.log("After clearing:", fiveDayForecastDiv);
for (let index = 1; index < weatherDataArray.length; index++) {
  // create forecast cards

  var dayData = weatherDataArray[index];

  // create the forecast card div
  var card = document.createElement("div");
  // added . before forecast and seemed to work
  card.classList.add(".forecast");

  // add the date to the card
  var dateElement = document.createElement("p");
  dateElement.textContent = dayData.date;
  card.append(dateElement);

  // add the temperature to the card
  var tempElement = document.createElement("p");
  tempElement.textContent = `Temp: ${dayData.temp}`;
  card.append(tempElement);

  // add the wind to the card
  var windElement = document.createElement("p");
  windElement.textContent = `Wind: ${dayData.wind}`;
  card.append(windElement);

  // add the humidity to the card
  var humidityElement = document.createElement("p");
  humidityElement.textContent = `Humidity: ${dayData.humidity}`;
  card.append(humidityElement);

  // append the card to the container element
  fiveDayForecastDiv.append(card);
}
}
















// }
//   var fiveDayForecastDiv = document.querySelector(".fiveDayForecast");
 
//   for (let index = 1; index < weatherDataArray.length; index++) {
//     // <div class="forecast">date</div>
//     var card = document.createElement("div");
//     card.setAttribute("class", "forecast");
//     var tempElement = document.createElement("h3");
//     tempElement.textContent = `temp: ${weatherDataArray[index].temp}`;
//     var windElement = document.createElement("h3");
//     windElement.textContent = `wind: ${weatherDataArray[index].wind}`;
//     var humidityElement = document.createElement("h3");
//     humidityElement.textContent = `humidity: ${weatherDataArray[index].humidity}`;
//     card.append(tempElement);
//     card.append(windElement);
//     card.append(humidityElement);
//     fiveDayForecastDiv.append(card);
//   }
// }
  // dont forget to empty and append the cards to clear page first
// function that calls teh api and will return the object of 5days and current
// function getWeatherData step1- search api for city name
// real step 1-   var latLongData = getCityCoordinate(cityName)

// 1) search API for city name  ==> function will return lat, long
// 2) call a different route at openweatherapi var data = getWeatherData(lat, long)
