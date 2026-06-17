let apikey = `3bc46b3a25d06c57c5df2da847e693bd`;


let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");

let cityName = document.querySelector("#cityName");
let temperature = document.querySelector("#temperature");
let windFlow = document.querySelector("#windFlow");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let humidity = document.querySelector("#humidity");

let weatherIcon = document.querySelector("#weatherIcon");



async function getweatherApp(city) {

    try {

        let raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );


        if (!raw.ok) {

            throw new Error("City not found");

        }


        let realData = await raw.json();

        let temp = realData.main.temp - 273.15;

        cityName.innerHTML = `City: ${realData.name}`;

        temperature.innerHTML =
            `Temperature: ${temp.toFixed(2)}°C`;


        windFlow.innerHTML =
            `Wind Flow: ${realData.wind.speed} m/s`;


        humidity.innerHTML =
            `Humidity: ${realData.main.humidity}%`;


        let sunriseTime = new Date(realData.sys.sunrise * 1000);

        let sunsetTime = new Date(realData.sys.sunset * 1000);



        sunrise.innerHTML =
            `Sunrise: ${sunriseTime.toLocaleTimeString()}`;


        sunset.innerHTML =
            `Sunset: ${sunsetTime.toLocaleTimeString()}`;
        weatherIcon.src =
            `https://openweathermap.org/img/wn/${realData.weather[0].icon}@2x.png`;

        if (temp < 0) {
            weatherIcon.src = "./images/cold.png";
            console.log("It's too cold");
        }
        else if (temp > 35) {
            console.log("It's too hot");
        }
        else {
            console.log("Temperature is moderate");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

searchBtn.addEventListener("click", () => {

    let city = cityInput.value;
    if (city) {
        getweatherApp(city);
    }
});
getweatherApp("Lucknow");