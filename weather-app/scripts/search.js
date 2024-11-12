const apiKey = 'd7a76d4db7a1742a2094350ce20c6f99';

// Elements for search input and suggestion container
const citySearchInput = document.getElementById('city-search');
const suggestionContainer = document.createElement('div');
suggestionContainer.id = 'suggestionContainer';
citySearchInput.parentNode.appendChild(suggestionContainer);

// Debounce function to limit API requests
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Fetches city suggestions from OpenWeatherMap API
async function getCitySuggestions(query) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=5&appid=${apiKey}`);
        const data = await response.json();
        
        if (data && data.list) {
            showSuggestions(data.list);
        } else {
            suggestionContainer.innerHTML = '';
        }
    } catch (error) {
        console.error('Error fetching city suggestions:', error);
    }
}

// Displays city suggestions
function showSuggestions(cities) {
    suggestionContainer.innerHTML = '';
    suggestionContainer.style.display = 'block';

    cities.forEach(city => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.innerText = `${city.name}, ${city.sys.country}`;

        suggestionItem.onclick = () => {
            citySearchInput.value = city.name;
            suggestionContainer.style.display = 'none';
        };

        suggestionContainer.appendChild(suggestionItem);
    });
}

// Handles input event with delay for suggestions
citySearchInput.addEventListener('input', debounce(() => {
    const query = citySearchInput.value.trim();
    if (query.length > 2) {
        getCitySuggestions(query);
    } else {
        suggestionContainer.style.display = 'none';
    }
}, 300));

// Handles search action on form submit
function searchWeather(event) {
    event.preventDefault();
    const city = citySearchInput.value.trim();
    
    if (city) {
        localStorage.setItem('selectedCity', city);
        window.location.href = 'weather.html';
    } else {
        alert("Please enter a city name.");
    }
}
