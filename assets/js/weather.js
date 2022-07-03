
let weatherInfo = document.getElementById("weatherInfo");
let cityName = document.getElementById("cityName");
let searchBtn = document.getElementById("search");

getWeather("Denver");
searchBtn.onclick = function () {
    getWeather(cityName.value);

}
let weather = [];

function getWeather(city) {
    var httpRequest = new XMLHttpRequest();
    console.log(city);
    var apiKey = "1bafa954eede0a7f752d7c1bcf60967d";
    httpRequest.open("get", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    httpRequest.send();
    
    httpRequest.addEventListener("readystatechange", function () {
        console.log(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            
            
            weather = JSON.parse(httpRequest.response);
            if(weather.cod != '404'){
             displayWeatherData();   
             clearSearch(); 
            }else{
 clearSearch();
                alert("No weather found.");
                throw new Error("No weather found.");
           
        }
            
        }


    });
}




function displayWeatherData() {
    var data = "";

    data = ` <h2 class="city">Weather in ${weather.name}</h2>
        <h1 class="temp">${weather.main.temp}°C</h1>
        <div class="d-flex justify-content-start ">
          <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="" class="icon " />
          <div class="description ">${weather.weather[0].description}</div>
        </div>
        <div class="humidity">Humidity: ${weather.main.humidity}%</div>
        <div class="wind">Wind speed: ${weather.wind.speed} km/h</div>`;
    weatherInfo.innerHTML = data;

}

function clearSearch(){
    cityName.value="";
}