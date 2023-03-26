var mydata

searchButton.addEventListener("click", function () {
  alert("clicked!");
// api key
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.929430&lon=-80.789030&appid=fd0ecc2f8de4f77fb50045960ded2319')
  .then(response => response.json())
  .then(data => {
    currentWeatherDay(data);
    // createWeatherDays(data.forecast.forecastday); commmented out 3/26
    // store weather data in local storage
    localStorage.setItem('weatherData', JSON.stringify(data));
  })
  // .catch(error => console.error(error));
// retrieve weather data from local storage
var storedWeatherData = JSON.parse(localStorage.getItem('weatherData'));

mydata = storedWeatherData
createWeatherDays(storedWeatherData)

  
  var data = [
    {
      city: "charlotte",
      date: "03/25/2023",
      temp: 60,
      wind: 25,
      humidity: 30,
    },
    //  can add in dates to teh ones below
    {
      date: "03/25/2023",
      temp: 60,
      wind: 65,
      humidity: 60,
    },
    {
      date: "3/25/2023",
      temp: 70,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/25/2023",
      temp: 90,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/25/2023",
      temp: 80,
      wind: 45,
      humidity: 10,
    },
    {
      date: "3/25/2023",
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
  // currentWeatherDay(data[0]);             commented this out 3/26
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
  tempElement.textContent = `temp: ${currentWeather.list[0].main.temp}`;
  var windElement = document.createElement("p");
  windElement.textContent = `wind: ${currentWeather.list[0].wind.speed}`;
  var humidityElement = document.createElement("p");
  humidityElement.textContent = `humidity: ${currentWeather.list[0].main.humidity}`;
  var cityElement = document.createElement("h1");
  cityElement.textContent = `city: ${currentWeather.city.name}`;
  var dateElement = document.createElement("p");
  date = currentWeather.list[0].dt_txt
  // dateElement.textContent = `date: ${currentWeather.date}`;  commented out 3/26 and replaced w line above
  
  date = date.split(" ")
  date = date[0]

  dateElement.textContent = 'date: ${date}';
  
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

// fiveDayForecastDiv.innerHTML = ""; // clear the container element, had to comment out to get cards back on screen
// console.log("After clearing:", fiveDayForecastDiv); commented out 3/26
// data is in every 8th index so we have to use +8 not i++
for (let index = 0; index < weatherDataArray.list.length; index = index + 8) {  //was let index = 7
  // create forecast cards

  var dayData = weatherDataArray[index];

  // create the forecast card div
  var card = document.createElement("div");
  // added . before forecast and seemed to work
  card.classList.add(".forecast");
 

  // add the date to the card
  var dateElement = document.createElement("p");
  date = dayData.dt_txt
  date = date.split(" ") //have to split date and time now output is =[date, time]
  date = date[0] //only using date here - index 0 in the array
  dateElement.textContent = `date: ${date}`;
  card.append(dateElement);

  // add the temperature to the card
  var tempElement = document.createElement("p");
  tempElement.textContent = `Temp: ${dayData.main.temp}`;
  card.append(tempElement);

  // add the wind to the card
  var windElement = document.createElement("p");
  windElement.textContent = `Wind: ${dayData.wind.speed}`;
  card.append(windElement);

  // add the humidity to the card
  var humidityElement = document.createElement("p");
  humidityElement.textContent = `Humidity: ${dayData.main.humidity}`;
  card.append(humidityElement);

  // append the card to the container element
  fiveDayForecastDiv.append(card);
}
}

















