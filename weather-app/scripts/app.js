const apiKey = 'd7a76d4db7a1742a2094350ce20c6f99';
let units = localStorage.getItem('units') || 'metric';

document.addEventListener('DOMContentLoaded', () => {
    const city = localStorage.getItem('selectedCity');
    if (city) {
        document.getElementById('city-name').innerText = `Weather in ${city}`;
        getWeatherData(city);
        getForecastData(city);
    } else {
        alert("No city selected. Please go back to the search page.");
    }
    updateUnitToggleText();
});

// Fetches and displays current weather data for a specified city
async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Fetches and displays a 5-day weather forecast for a specified city
async function getForecastData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

// Toggles between Celsius and Fahrenheit, updates storage and weather data
function toggleUnits() {
    units = units === 'metric' ? 'imperial' : 'metric';
    localStorage.setItem('units', units);
    updateUnitToggleText();
    const city = localStorage.getItem('selectedCity');
    if (city) {
        getWeatherData(city);
        getForecastData(city);
    }
}

// Updates the toggle button text based on the selected unit
function updateUnitToggleText() {
    const unitToggleButton = document.querySelector('.unit-toggle');
    unitToggleButton.innerText = units === 'metric' ? 'Switch to °F' : 'Switch to °C';
}
