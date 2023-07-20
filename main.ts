// *html elements
const cityNameText = document.querySelector("#cityNameText") as HTMLParagraphElement;
const weatherDescText = document.querySelector("#weatherDesc") as HTMLParagraphElement;
const weatherIconImg = document.querySelector("#weatherIcon") as HTMLImageElement;
const tempText = document.querySelector('#tempText') as HTMLParagraphElement;
const windSpeedText = document.querySelector('#windSpeedText') as HTMLParagraphElement;
const pressureText = document.querySelector('#pressureText') as HTMLParagraphElement;
const humidityText = document.querySelector('#humidityText') as HTMLParagraphElement;

const cityInput = document.querySelector('#citySearch') as HTMLInputElement;
const citySubmit = document.querySelector('#citySubmit') as HTMLButtonElement;
const langCheckbox = document.querySelector('#changeLanguage') as HTMLInputElement;

const favoriteButton = document.querySelector('#favorites') as HTMLButtonElement;
const favPageButton = document.querySelector('#favPage') as HTMLButtonElement;
const mainPageButton = document.querySelector('#mainPage') as HTMLButtonElement;
const favContainer = document.querySelector('#favContainer') as HTMLDivElement;
const favList = document.querySelector('#favList') as HTMLDivElement;
const weatherInfo = document.querySelector('#weather-card') as HTMLDivElement;

let fav1City: HTMLElement = document.querySelector('#fav1') as HTMLElement;

// variables
let favArr: string[] = [];
let favIndex: number = 1;

let cityName = 'Konin';
let weatherDesc: string;
let weatherIcon: string;
let temp: number;
let tempFeel: number;
let windSpeed: number;
let pressure: number;
let humidity: number;


// *functions
const fetchData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d764b95fb2e4dbd50206ed6cae5b45a1`);
    const data = await response.json();
    return data;
}

const updateData = () => {
    fetchData().then(data => {
        cityName = data.name;
        temp = Math.floor(data.main.temp);
        tempFeel = Math.floor(data.main.feels_like);
        weatherDesc = data.weather[0].description;
        weatherIcon = data.weather[0].icon;
        windSpeed = data.wind.speed;
        pressure = data.main.pressure;
        humidity = data.main.humidity
        
        cityNameText.innerText = `Weather in ${cityName}`
        tempText.innerHTML = `${temp}°C  <span id='feels-like'>(Feels like ${tempFeel}°C)</span>`
        weatherDescText.innerText = `${weatherDesc}`
        weatherIconImg.src = `https://openweathermap.org/img/wn/${weatherIcon}.png`
        windSpeedText.innerText = `Wind speed: ${windSpeed} m/s`
        pressureText.innerText = `Pressure: ${pressure} hPa`
        humidityText.innerHTML = `Humidity: ${humidity}%`

        favContainer.hidden = true;
    })
}

// *event listeners
citySubmit.addEventListener("click", () => {
    if(cityInput.value != ''){
        cityName = cityInput.value;
        cityInput.value = '';
        updateData();
    }
})

favoriteButton.addEventListener('click', () => {
    favArr.push(cityName);
    favList.innerHTML += `<button class='favItems' id="fav${favIndex}"><p id="favCityName${favIndex}">${cityName}</p></button>`
    fav1City = document.querySelector('#fav1') as HTMLElement;
    console.log(fav1City)
    favIndex++;
})

fav1City.addEventListener('click', () => {
    let fav1CityChild = fav1City.firstChild as HTMLParagraphElement;
    cityName = fav1CityChild.innerText;
    updateData();
    
    favContainer.hidden = true;
    weatherInfo.hidden = false;
})


// *changing sites function
favPageButton.addEventListener('click', () => {
    favContainer.hidden = false;
    weatherInfo.hidden = true;
})

mainPageButton.addEventListener('click', () => {
    favContainer.hidden = true;
    weatherInfo.hidden = false;
})

/*
   ?  favorites button, cityName adds to an array, shows this site with favs
TODO  clicking same button deletes a city from array,
TODO  new site with favorites and when clicked, shows this site with favs
*/

// TODO kiedy apka prawie skończona to nie może być w komentarzu
// setInterval(updateData, 10000)

// TODO kiedy apka prawie skończona to musi zniknąć
updateData();
