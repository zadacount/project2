const apiKey = '95c5b7da69ed4db68201f935053f01f2'; // Placeholder for security

// Function to get the ingredient from the URL
function getIngredientFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const ingredient = params.get('ingredient');
  return ingredient;
}

// Fetch and display recipes when the page loads
window.onload = function() {
  const ingredient = getIngredientFromUrl();
  if (ingredient) {
    searchRecipes(ingredient); // Start search if ingredient exists
  } else {
    alert("No ingredient specified. Please try a new search."); // Improved user feedback
  }  
};

// Function to search for recipes by ingredient and display results
function searchRecipes(ingredient) {
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      displayRecipes(data); // Display recipes on the page
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      alert('Failed to fetch recipes. Please try again later.'); // User feedback
    });
}

// Function to display recipes on the page
function displayRecipes(recipes) {
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';

  if (recipes.length === 0) {
    container.innerHTML = '<p style="font-size: 1.5em; width: 1200px; color: black; margin-left: 50px; margin-top: 50px; ">No recipes found for the given ingredient.</p>';
    return;
  }

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p>Preparation time: ${recipe.readyInMinutes || 'N/A'} minutes</p>
      <div class="button-container">
        <button onclick="viewRecipeDetails(${recipe.id})">View Details</button>
        <button onclick="addToFavorites(${recipe.id}, '${recipe.title}', '${recipe.image}')">Add to Favorites</button>
      </div>
    `;
    container.appendChild(recipeCard);
  });
}

// Function to view recipe details
function viewRecipeDetails(recipeId) {
  window.location.href = `recipe.html?recipeId=${recipeId}`;
}

// Enhanced addToFavorites function to prevent duplicates
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

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
