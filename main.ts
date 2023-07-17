//html elements
const cityNameText = document.querySelector("#cityNameText") as HTMLParagraphElement;
const tempText = document.querySelector('p#tempText') as HTMLParagraphElement;
const windSpeedText = document.querySelector('p#windSpeedText') as HTMLParagraphElement;

// object weather
let weather = {
    cityName: 'Konin',
    displayWeather: (data) => {
        const temp = data.main.temp;
        const windSpeed = data.wind.speed;

        cityNameText.innerText = "City: " + this.cityName;
        tempText.innerText = temp + "°C";
        windSpeedText.innerText = "Wind speed: " + windSpeed + "m/s";
    },
    fetchWeather: (cityName) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d764b95fb2e4dbd50206ed6cae5b45a1`)
        .then((response) => {response.json();})
        .then((data) => this.displayWeather(data))
    }

}

weather.fetchWeather(weather.cityName);


