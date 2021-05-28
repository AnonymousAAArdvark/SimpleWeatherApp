import weather from "./weather";

const view = (() => {
    function updateView(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const icon = document.getElementById("icon");
        const description = document.getElementById("description");
        const temperature = document.getElementById("temperature");
        const tempMax = document.getElementById("tempMax");
        const tempMin = document.getElementById("tempMin");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = `${weatherData.cityName}`;
        icon.src = `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
        description.textContent = `${weatherData.description}`;
        temperature.textContent = `${Math.round(weatherData.temperature)}`;
        tempMax.textContent = `High: ${Math.round(weatherData.tempMax)}`;
        tempMin.textContent = `Low: ${Math.round(weatherData.tempMin)}`;
        feelsLike.textContent = `Feels like: ${Math.round(
            weatherData.feelsLike,
        )}`;
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
        wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
    }

    return { updateView };
})();

export default view;
