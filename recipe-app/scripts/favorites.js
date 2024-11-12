// Load favorites from localStorage and display them
window.onload = function() {
  const favoritesContainer = document.getElementById('favoritesContainer');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = '<p>No favorite recipes saved yet.</p>';
  } else {
    favorites.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>Preparation time: ${recipe.readyInMinutes || 'N/A'} minutes</p>
        <div class="button-container">
          <button onclick="viewRecipeDetails(${recipe.id})">View Details</button>
          <button onclick="removeFromFavorites(${recipe.id})">Remove from Favorites</button>
        </div>
      `;
      favoritesContainer.appendChild(recipeCard);
    });
  }
};

// Function to view recipe details
function viewRecipeDetails(recipeId) {
  window.location.href = `recipe.html?recipeId=${recipeId}`;
}

// Function to remove from favorites without reloading the page
function removeFromFavorites(id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(recipe => recipe.id !== id);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  // Show notification
  showNotification("Recipe removed from favorites!");

  // Update UI by removing the recipe card without reloading
  document.querySelectorAll('.recipe-card').forEach(card => {
    if (card.querySelector('button[onclick*="' + id + '"]')) {
      card.remove();
    }
  });
}

// Function to display notifications
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
