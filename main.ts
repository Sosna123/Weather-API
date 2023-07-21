// *html elements
// weather info
const weatherInfo = document.querySelector('#weather-card') as HTMLDivElement;
const cityNameText = document.querySelector("#cityNameText") as HTMLParagraphElement;
const weatherDescText = document.querySelector("#weatherDesc") as HTMLParagraphElement;
const weatherIconImg = document.querySelector("#weatherIcon") as HTMLImageElement;
const tempText = document.querySelector('#tempText') as HTMLParagraphElement;
const windSpeedText = document.querySelector('#windSpeedText') as HTMLParagraphElement;
const pressureText = document.querySelector('#pressureText') as HTMLParagraphElement;
const humidityText = document.querySelector('#humidityText') as HTMLParagraphElement;

// inputs and search
const cityInput = document.querySelector('#citySearch') as HTMLInputElement;
const citySubmit = document.querySelector('#citySubmit') as HTMLButtonElement;

// favs page
const favoriteButton = document.querySelector('#favorites') as HTMLButtonElement;
const favPageButton = document.querySelector('#favPage') as HTMLButtonElement;
const mainPageButton = document.querySelector('#mainPage') as HTMLButtonElement;
const favContainer = document.querySelector('#favContainer') as HTMLDivElement;
const favList = document.querySelector('#favList') as HTMLDivElement;
let favItems = document.querySelectorAll('.favItems');
const deleteFavsButton = document.querySelector('#deleteFavs') as HTMLButtonElement;

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
let favIndex: number = 0;

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

const getCookie = (cookieName) => {
    let name = cookieName + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
    favIndex++;

    if(favIndex > 9){
        favIndex--;
        return null;
    }

    favList.innerHTML += `<div class='favItems'><button class='favItems' id="fav${favIndex}"><p>${cityName}</p></button></div>`
    document.cookie = `favList=${favList.innerHTML}; expires=${new Date(2050, 1, 1)};`
    document.cookie = `currentFavIndex=${favIndex.toString()}; expires=${new Date(2050, 1, 1)};`

    if(favIndex >= 1){
        // przenoszenie do informacji o mieście
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
        // przenoszenie do informacji o mieście
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
})

deleteFavsButton.addEventListener('click', () => {
    favItems = document.querySelectorAll('.favItems');
    favIndex = 0;
    favItems.forEach(element => {
        element.remove();
    })
    document.cookie = `favList=; expires=${new Date(1)};`
    document.cookie = `currentFavIndex=0; expires=${new Date(1)};`

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


// *cookiesy
favList.innerHTML = getCookie('favList');
favIndex = Number(getCookie('currentFavIndex'));

if(favIndex >= 1){
    // przenoszenie do informacji o mieście
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
    // przenoszenie do informacji o mieście
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

/* 
     !TODOS:
   ?  favorites button => cityName adds to an array
   ?  new site with favorites => shows this site with favs
   ?  delete all button
   ?  limit fav count to 9
*/

// TODO kiedy apka prawie skończona to nie może być w komentarzu
// setInterval(updateData, 10000)

// TODO kiedy apka prawie skończona to musi zniknąć
updateData();