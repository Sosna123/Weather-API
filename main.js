var _this = this;
//html elements
var cityNameText = document.querySelector("#cityNameText");
var tempText = document.querySelector('p#tempText');
var windSpeedText = document.querySelector('p#windSpeedText');
// object weather
var weather = {
    cityName: 'Konin',
    displayWeather: function (data) {
        var temp = data.main.temp;
        var windSpeed = data.wind.speed;
        cityNameText.innerText = "City: " + _this.cityName;
        tempText.innerText = temp + "°C";
        windSpeedText.innerText = "Wind speed: " + windSpeed + "m/s";
    },
    fetchWeather: function (cityName) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&units=metric&appid=d764b95fb2e4dbd50206ed6cae5b45a1"))
            .then(function (response) { response.json(); })
            .then(function (data) { return _this.displayWeather(data); });
    }
};
weather.fetchWeather(weather.cityName);
