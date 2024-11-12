const apiKey = '95c5b7da69ed4db68201f935053f01f2';

// Function to get recipe ID from the URL
function getRecipeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('recipeId');
}

// Fetch and display the recipe details when the page loads
window.onload = function() {
  const recipeId = getRecipeIdFromUrl();
  if (recipeId) {
    fetchRecipeDetails(recipeId);
  }
};

// Fetch recipe details from the API
function fetchRecipeDetails(recipeId) {
  fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayRecipeDetails(data);
    })
    .catch(error => console.error('Error fetching recipe details:', error));
}

// Display the recipe details
function displayRecipeDetails(recipe) {
  const recipeImageContainer = document.getElementById('recipeImage');
  const recipeContentContainer = document.getElementById('recipeContent');

  // Set image
  recipeImageContainer.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}">`;

  // Set content
  recipeContentContainer.innerHTML = `
    <h2>${recipe.title}</h2>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
    </ul>
    <h3>Instructions:</h3>
    <p>${recipe.instructions || 'Instructions not available.'}</p>
    <h3 class="nutrition-info">Nutritional Information:</h3>
    <p>Calories: ${recipe.nutrition?.nutrients.find(n => n.name === "Calories")?.amount || 'N/A'} kcal</p>
  `;
}
