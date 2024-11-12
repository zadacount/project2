// Displays current weather details
function displayCurrentWeather(data) {
    document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°`;
    document.getElementById('conditions').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${data.wind.speed} km/h`;
    document.getElementById('weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;
}

// Displays 5-day weather forecast
function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-details');
    forecastContainer.innerHTML = ''; // Clear container

    for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const date = new Date(day.dt * 1000).toLocaleDateString();
        const temp = `${Math.round(day.main.temp_min)}° / ${Math.round(day.main.temp_max)}°`;
        const icon = day.weather[0].icon;
        
        forecastContainer.innerHTML += `
            <div>
                <p>${date}</p>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Icon">
                <p>${temp}</p>
                <p>${day.weather[0].description}</p>
            </div>
        `;
    }
}
