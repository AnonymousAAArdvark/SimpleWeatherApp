const weather = (() => {
    function convert(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity, temp_min: tempMin, temp_max: tempMax},
            wind: { speed: windSpeed},
            weather: [{ icon, description }],
        } = data;
        return { cityName, temperature, tempMin, tempMax, feelsLike, humidity, windSpeed, icon, description };
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8320d4df88252e4e2bb545b880b956e0`;
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            if(!response.ok) throw new Error(`City ${city} not found`);
            return convert(await response.json());
        }
        catch(error) {
            alert(error);
            return null;
        }
    }
    return { getData };
})();

export default weather;