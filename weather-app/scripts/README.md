
Weatherology:
Weatherology allows users to search for weather information by city, view current weather details, and check a 5-day forecast. The app also provides a unit toggle to switch between Celsius and Fahrenheit for temperature display, making it easy for users to stay informed about the weather.


Features:
Search Weather:
   - Users can search for weather by entering a city name.
   - An autosuggest feature helps users by suggesting city names as they type.

View Current Weather:
   - Displays the current weather including temperature, humidity, wind speed, and weather conditions.
   - Weather conditions are represented with icons for a clear visual understanding.

5-Day Forecast:
   - Shows a 5-day weather forecast with minimum and maximum temperatures, weather conditions, and icons for each day.
   - Provides a quick and easy view of upcoming weather.

Unit Toggle:
   - Users can toggle between Celsius and Fahrenheit for temperature display.
   - The toggle button allows switching units on the current weather page.



File Structure:
   index.html: The main page where users can search for weather by city.
   weather.html: Displays the current weather and 5-day forecast for the selected city.
   assets/logo.png: The logo image for the app.
   scripts/app.js: Handles fetching weather data from the OpenWeatherMap API and managing the unit toggle.
   scripts/search.js: Manages the search functionality, including showing city suggestions.
   scripts/ui.js: Handles the display of weather data on the weather page.
   scripts/geolocation.js: Fetches weather data based on the user's current location.
   styles/style.css: Contains the general styling for the app.



Getting Started:
Open index.html:
   - Start the app by opening index.html in a web browser.
   - Use the search bar to find weather information by city name.

Searching Weather:
   - Use the search bar on the main page to find weather by city name.
   - Suggested city names will appear as you type.

Viewing Current Weather:
   - Once a city is selected, the app will display the current weather including temperature, humidity, wind speed, and conditions.

Viewing the 5-Day Forecast:
   - After selecting a city, a 5-day weather forecast will be displayed below the current weather, including high and low temperatures and weather conditions for each day.

Using the Unit Toggle:
   - Switch between Celsius and Fahrenheit for temperature display by clicking the unit toggle button on the weather page.



Notes
   - This app uses the OpenWeatherMap API to fetch weather data. You need an API key to make it work.
   - Replace YOUR API KEY in the `.js` files with your actual API key.