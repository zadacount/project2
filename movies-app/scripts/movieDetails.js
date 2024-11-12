const apiKey = '0d43551fff780ccab100def81f91acd6';

// Function to get movie ID from the URL
function getMovieIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('movieId');
}

// Fetch and display movie details when the page loads
window.onload = function() {
  const movieId = getMovieIdFromUrl();
  if (movieId) {
    fetchMovieDetails(movieId);
  }
};

// Fetch movie details from the API
function fetchMovieDetails(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,videos,reviews`)
    .then(response => response.json())
    .then(movie => {
      const detailsContainer = document.getElementById('detailsContainer');
      detailsContainer.innerHTML = `
        <h2 class="title">${movie.title}</h2>
        <p class="overview">${movie.overview}</p>
        <p class="rating-runtime">Rating: ${movie.vote_average} | Runtime: ${movie.runtime} mins</p>
        <p class="cast-list">Cast: ${movie.credits.cast.map(c => c.name).join(', ')}</p>
        ${movie.videos.results.length ? `<div class="trailer-link"><iframe src="https://www.youtube.com/embed/${movie.videos.results[0].key}" frameborder="0" allowfullscreen></iframe></div>` : '<p>No trailer available</p>'}
      `;
    })
    .catch(error => console.error('Error fetching movie details:', error));
}
