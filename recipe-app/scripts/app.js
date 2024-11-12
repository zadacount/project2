const apiKey = '95c5b7da69ed4db68201f935053f01f2'; 

// Debounce function to limit API calls for autocomplete
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Event listener for the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const ingredient = document.getElementById('ingredientInput').value;
  window.location.href = `results.html?ingredient=${ingredient}`;
});

// Function to search for recipes by ingredient and display results
function searchRecipes(ingredient) {
  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayRecipes(data);
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      alert('Failed to fetch recipes. Please try again later.');
    });
}

// Function to display recipes on the page
function displayRecipes(recipes) {
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p>Preparation time: ${recipe.readyInMinutes || 'N/A'} minutes</p>
      <button onclick="viewRecipeDetails(${recipe.id})">View Details</button>
      <button onclick="addToFavorites(${recipe.id}, '${recipe.title}', '${recipe.image}')">Add to Favorites</button>
    `;
    container.appendChild(recipeCard);
  });
}

// Function to view recipe details
function viewRecipeDetails(recipeId) {
  window.location.href = `recipe.html?recipeId=${recipeId}`;
}

// Enhanced function to add to favorites without duplicates
function addToFavorites(id, title, image) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.some(recipe => recipe.id === id)) {  // Check for duplicates
    favorites.push({ id, title, image });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showNotification(`${title} has been added to favorites!`);
  } else {
    showNotification(`${title} is already in your favorites.`);
  }
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Debounced Autocomplete suggestions for ingredients
document.getElementById('ingredientInput').addEventListener('input', debounce(function() {
  const query = this.value;
  fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      showSuggestions(data);
    })
    .catch(error => {
      console.error('Error fetching suggestions:', error);
      alert('Failed to fetch suggestions. Please try again later.');
    });
}, 300)); // Debounced to 300 ms delay

// Function to display autocomplete suggestions
function showSuggestions(suggestions) {
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';
  suggestions.forEach(suggestion => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.textContent = suggestion.name;
    suggestionItem.onclick = function() {
      document.getElementById('ingredientInput').value = suggestion.name;
      suggestionsContainer.innerHTML = '';
    };
    suggestionsContainer.appendChild(suggestionItem);
  });
}