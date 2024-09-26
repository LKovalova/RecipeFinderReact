# Recipe Finder

## Author

This application was created by **Liubov Kovalova**.

## Description

Recipe Finder is a responsive web application built with React that allows
users to search for recipes using the Spoonacular API. Users can explore
various recipes, view detailed information, and filter results by cuisine.

## Features

- **Home Page**:

  - Search input and button to find recipes.
  - Display search results with pagination (5 results per page).
  - Filter recipes by cuisine.
  - Each recipe card shows:
    - Recipe Name
    - Recipe Image
  - Clicking on a recipe redirects to the detail page.

- **Recipe Detail Page**:
  - Displays:
    - Recipe Name
    - Recipe Image
    - Health Information (e.g., vegan, dairy-free)
    - List of Ingredients (with name and measure)
    - Cooking Instructions

## API Documentation

- **Authentication**: [Spoonacular Authentication](https://spoonacular.com/food-api/docs#Authentication)
- **Search Recipes**: [Search Recipes Documentation](https://spoonacular.com/food-api/docs#Search-Recipes-Complex)
- **Get Recipe**: [Get Recipe Information Documentation](https://spoonacular.com/food-api/docs#Get-Recipe-Information)
- **Supported Cuisines**: [Cuisines Documentation](https://spoonacular.com/food-api/docs#Cuisines)

## Technologies Used

- React.js
- Bootstrap
- Spoonacular API
- React Router
