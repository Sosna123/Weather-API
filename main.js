var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// *html elements
var cityNameText = document.querySelector("#cityNameText");
var weatherDescText = document.querySelector("#weatherDesc");
var weatherIconImg = document.querySelector("#weatherIcon");
var tempText = document.querySelector('#tempText');
var windSpeedText = document.querySelector('#windSpeedText');
var pressureText = document.querySelector('#pressureText');
var humidityText = document.querySelector('#humidityText');
var cityInput = document.querySelector('#citySearch');
var citySubmit = document.querySelector('#citySubmit');
var langCheckbox = document.querySelector('#changeLanguage');
var favoriteButton = document.querySelector('#favorites');
var favPageButton = document.querySelector('#favPage');
var mainPageButton = document.querySelector('#mainPage');
var favContainer = document.querySelector('#favContainer');
var favList = document.querySelector('#favList');
var weatherInfo = document.querySelector('#weather-card');
var fav1City = document.querySelector('#fav1');
// variables
var favArr = [];
var favIndex = 1;
var cityName = 'Konin';
var weatherDesc;
var weatherIcon;
var temp;
var tempFeel;
var windSpeed;
var pressure;
var humidity;
// *functions
var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&units=metric&appid=d764b95fb2e4dbd50206ed6cae5b45a1"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var updateData = function () {
    fetchData().then(function (data) {
        cityName = data.name;
        temp = Math.floor(data.main.temp);
        tempFeel = Math.floor(data.main.feels_like);
        weatherDesc = data.weather[0].description;
        weatherIcon = data.weather[0].icon;
        windSpeed = data.wind.speed;
        pressure = data.main.pressure;
        humidity = data.main.humidity;
        cityNameText.innerText = "Weather in ".concat(cityName);
        tempText.innerHTML = "".concat(temp, "\u00B0C  <span id='feels-like'>(Feels like ").concat(tempFeel, "\u00B0C)</span>");
        weatherDescText.innerText = "".concat(weatherDesc);
        weatherIconImg.src = "https://openweathermap.org/img/wn/".concat(weatherIcon, ".png");
        windSpeedText.innerText = "Wind speed: ".concat(windSpeed, " m/s");
        pressureText.innerText = "Pressure: ".concat(pressure, " hPa");
        humidityText.innerHTML = "Humidity: ".concat(humidity, "%");
        favContainer.hidden = true;
    });
};
// *event listeners
citySubmit.addEventListener("click", function () {
    if (cityInput.value != '') {
        cityName = cityInput.value;
        cityInput.value = '';
        updateData();
    }
});
favoriteButton.addEventListener('click', function () {
    favArr.push(cityName);
    favList.innerHTML += "<button class='favItems' id=\"fav".concat(favIndex, "\"><p id=\"favCityName").concat(favIndex, "\">").concat(cityName, "</p></button>");
    fav1City = document.querySelector('#fav1');
    console.log(fav1City);
    favIndex++;
});
fav1City.addEventListener('click', function () {
    var fav1CityChild = fav1City.firstChild;
    cityName = fav1CityChild.innerText;
    updateData();
    favContainer.hidden = true;
    weatherInfo.hidden = false;
});
// *changing sites function
favPageButton.addEventListener('click', function () {
    favContainer.hidden = false;
    weatherInfo.hidden = true;
});
mainPageButton.addEventListener('click', function () {
    favContainer.hidden = true;
    weatherInfo.hidden = false;
});
/*
   ?  favorites button, cityName adds to an array, shows this site with favs
TODO  clicking same button deletes a city from array,
TODO  new site with favorites and when clicked, shows this site with favs
*/
// TODO kiedy apka prawie skończona to nie może być w komentarzu
// setInterval(updateData, 10000)
// TODO kiedy apka prawie skończona to musi zniknąć
updateData();
