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

// *variables
let fav1City: HTMLButtonElement;
let fav2City: HTMLButtonElement;
let fav3City: HTMLButtonElement;
let fav4City: HTMLButtonElement;
let fav5City: HTMLButtonElement;
let fav6City: HTMLButtonElement;
let fav7City: HTMLButtonElement;
let fav8City: HTMLButtonElement;
let fav9City: HTMLButtonElement;

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

// *hiding container
favContainer.hidden = true;

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
    console.log(favIndex);
    
    if(favIndex >= 1){
        fav1City = document.querySelector(`#fav1`) as HTMLButtonElement;
        fav1City.addEventListener('click', () => {
            let fav1CityChild = fav1City.firstChild as HTMLParagraphElement;
            cityName = fav1CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 2){
        fav2City = document.querySelector(`#fav2`) as HTMLButtonElement;
        fav2City.addEventListener('click', () => {
            let fav2CityChild = fav2City.firstChild as HTMLParagraphElement;
            cityName = fav2CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 3){
        fav3City = document.querySelector(`#fav3`) as HTMLButtonElement;
        fav3City.addEventListener('click', () => {
            let fav3CityChild = fav3City.firstChild as HTMLParagraphElement;
            cityName = fav3CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 4){
        fav4City = document.querySelector(`#fav4`) as HTMLButtonElement;
        fav4City.addEventListener('click', () => {
            let fav4CityChild = fav4City.firstChild as HTMLParagraphElement;
            cityName = fav4CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 5){
        fav5City = document.querySelector(`#fav5`) as HTMLButtonElement;
        fav5City.addEventListener('click', () => {
            let fav5CityChild = fav5City.firstChild as HTMLParagraphElement;
            cityName = fav5CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 6){
        fav6City = document.querySelector(`#fav6`) as HTMLButtonElement;
        fav6City.addEventListener('click', () => {
            let fav6CityChild = fav6City.firstChild as HTMLParagraphElement;
            cityName = fav6CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 7){
        fav7City = document.querySelector(`#fav7`) as HTMLButtonElement;
        fav7City.addEventListener('click', () => {
            let fav7CityChild = fav7City.firstChild as HTMLParagraphElement;
            cityName = fav7CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 8){
        fav8City = document.querySelector(`#fav8`) as HTMLButtonElement;
        fav8City.addEventListener('click', () => {
            let fav8CityChild = fav8City.firstChild as HTMLParagraphElement;
            cityName = fav8CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    if(favIndex >= 9){
        fav9City = document.querySelector(`#fav9`) as HTMLButtonElement;
        fav9City.addEventListener('click', () => {
            let fav9CityChild = fav9City.firstChild as HTMLParagraphElement;
            cityName = fav9CityChild.innerText;
            updateData();
            favContainer.hidden = true;
            weatherInfo.hidden = false;
        })
    }
    
    

    favIndex++;
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
TODO  clicking favorite button deletes a city from array,
TODO  new site with favorites and when clicked, shows this site with favs
*/

// TODO kiedy apka prawie skończona to nie może być w komentarzu
// setInterval(updateData, 10000)

// TODO kiedy apka prawie skończona to musi zniknąć
updateData();
