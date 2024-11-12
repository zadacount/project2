const apiKey = '0d43551fff780ccab100def81f91acd6';
let movies = [];

// Fetch query from URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Search movies and fetch results based on query
function searchMovies(query) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => response.json())
    .then(data => {
      movies = data.results;
      displayMovies(movies);
    })
    .catch(error => console.error('Error fetching movies:', error));
}

// Display movies with sorting
function displayMovies(movies) {
  const movieContainer = document.getElementById('movieContainer');
  movieContainer.innerHTML = '';
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>Release Date: ${movie.release_date}</p>
      </div>
      <div class="movie-actions">
        <button class="details-btn" onclick="openDetailsPage(${movie.id})">View Details</button>
        <button class="watchlist-btn" onclick="addToWatchlist(${movie.id}, '${movie.title}', '${movie.poster_path}')">Add to Watchlist</button>
      </div>
    `;
    movieContainer.appendChild(movieCard);
  });
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  notification.classList.remove('hidden');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 3000);
}

// Function to handle adding a movie to the watchlist
function addToWatchlist(movieId, movieTitle, posterPath) {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

  // Add the movie if it's not already in the watchlist
  if (!watchlist.some(movie => movie.id === movieId)) {
    watchlist.push({ id: movieId, title: movieTitle, poster_path: posterPath });
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    showNotification(`Added "${movieTitle}" to Watchlist!`);
  } else {
    showNotification(`"${movieTitle}" is already in the Watchlist.`);
  }
}

// Open details page in a new tab
function openDetailsPage(movieId) {
  window.open(`movie.html?movieId=${movieId}`, '_blank');
}

// Sorting functionality
document.getElementById('sortSelect').addEventListener('change', function() {
  const sortValue = this.value;
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortValue === 'popularity.desc') return b.popularity - a.popularity;
    if (sortValue === 'release_date.desc') return new Date(b.release_date) - new Date(a.release_date);
    if (sortValue === 'vote_average.desc') return b.vote_average - a.vote_average;
  });
  displayMovies(sortedMovies);
});

// Initialize page with query
window.onload = function() {
  const query = getQueryParam('query');
  if (query) {
    searchMovies(query);
  }
};
