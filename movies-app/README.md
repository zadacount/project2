Movielogy
 Movielogy allows users to search for movies, view movie details, and save their favorite movies. It is easy to use and has several key features for a smooth experience.

Features
Search Movies:

   Users can search for movies by entering movie titles.
   An autosuggest feature helps users by suggesting movie titles as they type.

View Movies:
   Displays movies in a grid layout with posters, titles, and release dates.
   Each movie has a "View Details" button to see more information.


Movie Details:
   Shows details about the selected movie, including synopsis, rating, runtime, cast, and crew.
   The details are fetched dynamically based on the movie selected.


Watchlist:
   Users can save movies to a "Watchlist" for easy access later.
   Watchlist is stored locally, so users can keep their list even after refreshing the page.


File Structure
   index.html: The main page where users can search for movies.
   results.html: Shows a list of movies based on the user's search.
   movie.html: Displays detailed information about a selected movie.
   watchlist.html: A page where users can view their saved favorite movies.
   assets/logo.png: The logo image for the app.
   scripts/app.js: Handles the main functions for searching movies and displaying search results.
   scripts/results.js: Handles displaying the results based on search input and manages the "Add to Watchlist" feature.
   scripts/movieDetails.js: Manages the movie details page by fetching and displaying selected movie information.
   scripts/watchlist.js: Controls the watchlist feature, allowing users to add, view, and remove movies from their watchlist.
   styles/style.css: Contains the general styling for the app.
   styles/watchlist.css: Contains specific styling for the Watchlist page.

Getting Started

Open index.html:
   Start the app by opening index.html in a web browser.
   Use the search bar to find movies by title.


Searching Movies:
   Use the search bar on the main page to find movies by title.
   Suggested movie titles will appear as you type.


Viewing Movie Details:
   Click the "View Details" button on any movie to see full details.
   The details include synopsis, rating, runtime, cast, and trailers.


Adding to Watchlist:
   Click the "Add to Watchlist" button to save a movie.
   Visit watchlist.html to see your saved movies.


Viewing Watchlist:
   Open watchlist.html to view and manage your watchlist.
   You can also remove movies from the watchlist on this page.


Notes
   This app uses the TMDb API to fetch movie data. You need an API key to make it work.
   Replace YOUR API KEY in the .js files with your actual API key.