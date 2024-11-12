Recipe App:
This Recipe App allows users to search for recipes, view recipe details, and save their favorite recipes. It is easy to use and has several key features for a smooth experience.


 Features:
1. Search Recipes:
   - Users can search for recipes by entering ingredients.
   - An autosuggest feature helps users by suggesting ingredients as they type.

2. View Recipes:
  -  Displays recipes in a grid layout with images, names, and preparation times.
  -  Each recipe has a "View Details" button to see more information.

3. Recipe Details:
  - Shows details about the selected recipe, including ingredients, instructions, and nutritional information.
  - The details are fetched dynamically based on the recipe selected.

4. Favorites:
  - Users can save recipes to a "Favorites" list for easy access later.
  - Favorites are stored locally, so users can keep their list even after refreshing the page.


 File Structure:
`index.html`: The main page where users can search for recipes.
`results.html`: Shows a list of recipes based on the user's search.
`recipe.html`: Displays detailed information about a selected recipe.
`favorites.html`: A page where users can view their saved favorite recipes.
`assets/logo.png`: The logo image for the app.
`scripts/app.js`: Handles the main functions for searching recipes and displaying search results.
`scripts/results.js`: Handles displaying the results based on search input.
`scripts/recipeDetails.js`: Manages the recipe details page by fetching and displaying selected recipe info.
`scripts/favorites.js`: Controls the favorites feature, allowing users to add or remove recipes from their favorites.
`styles/style.css`: Contains the styling for the app.


 Getting Started:
1. Open `index.html`:
    - Start the app by opening `index.html` in a web browser.
    - Enter an ingredient to search for recipes.

2. Searching Recipes:
   -  Use the search bar on the main page to find recipes by ingredients.
   -  Suggested ingredients will appear as you type.

3. Viewing Recipe Details:
   -  Click the "View Details" button on any recipe to see full details.
   -  The details include ingredients, instructions, and nutritional info.

4. Adding to Favorites:
   -  Click the "Add to Favorites" button to save a recipe.
   -  Visit `favorites.html` to see your saved recipes.

5. Viewing Favorites:
   -  Open `favorites.html` to view and manage your favorite recipes.
   -  You can also remove recipes from favorites on this page.


 Notes:
 This app uses the Spoonacular API for fetching recipe data. You need an API key to make it work.
 Replace YOUR API KEY in the `.js` files with your actual API key.
