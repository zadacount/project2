// Retrieve and display watchlist movies
function displayWatchlist() {
  const watchlistContainer = document.getElementById('watchlistContainer');
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

  if (watchlist.length === 0) {
    watchlistContainer.innerHTML = '<p>Your Watchlist is empty.</p>';
    return;
  }

  watchlistContainer.innerHTML = '';
  watchlist.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <button onclick="removeFromWatchlist(${movie.id})">Remove</button>
      </div>
    `;
    watchlistContainer.appendChild(movieCard);
  });
}

// Function to remove a movie from the watchlist with confirmation
function removeFromWatchlist(movieId) {
  // Show a confirmation dialog
  const confirmDelete = confirm("Are you sure you want to remove this item?");
  if (confirmDelete) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist = watchlist.filter(movie => movie.id !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    displayWatchlist(); // Refresh the watchlist display
  }
}

// Initialize the page
window.onload = function() {
  displayWatchlist();
};
