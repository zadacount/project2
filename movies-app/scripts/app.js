const apiKey = '0d43551fff780ccab100def81f91acd6'; 

// Elements for search input and suggestions
const titleInput = document.getElementById('titleInput');
const suggestionContainer = document.createElement('div');
suggestionContainer.id = 'suggestionContainer';
titleInput.parentNode.appendChild(suggestionContainer);

// Debounce function to limit API calls for autocomplete
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Get movie suggestions based on user input
function getSuggestions(query) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => response.json())
    .then(data => showSuggestions(data.results))
    .catch(error => console.error('Error fetching suggestions:', error));
}

// Show autocomplete suggestions
function showSuggestions(movies) {
  suggestionContainer.innerHTML = ''; 
  suggestionContainer.style.display = 'block'; 
  movies.slice(0, 5).forEach(movie => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.innerText = movie.title;
    suggestionItem.onclick = () => {
      titleInput.value = movie.title;
      suggestionContainer.style.display = 'none';
    };
    suggestionContainer.appendChild(suggestionItem);
  });
}

// Event listener for search input
titleInput.addEventListener('input', debounce(function() {
  const query = titleInput.value.trim();
  if (query) {
    getSuggestions(query);
  } else {
    suggestionContainer.innerHTML = '';
    suggestionContainer.style.display = 'none';
  }
}, 300));

// Event listener for search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('titleInput').value;
  window.location.href = `results.html?query=${encodeURIComponent(title)}`;
});