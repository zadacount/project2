function getLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`);
            const data = await response.json();
            displayCurrentWeather(data);
            getForecastByCoordinates(latitude, longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

async function getForecastByCoordinates(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
    const data = await response.json();
    displayForecast(data);
}
