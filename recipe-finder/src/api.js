const apiKey = "2d507c787fd04854acc0754d5bce0b6c";

/**
 * Fetches recipes based on the search query and cuisine type.
 *
 * @param {string} query - The search term used to find recipes (e.g., ingredient or recipe name).
 * @param {string} cuisine - The type of cuisine to filter the search results (optional).
 * @param {number} page - The page number for pagination (1-indexed).
 * @param {number} number - The number of recipes to fetch per page.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response containing the recipes data.
 * @throws {Error} - Throws an error if the response is not ok.
 */
export const fetchRecipes = async (query, cuisine, page, number) => {
  const offset = (page - 1) * number;
  const queryParams = new URLSearchParams({
    query,
    number,
    offset,
    apiKey,
  });

  if (cuisine) {
    queryParams.append("cuisine", cuisine);
  }

  const url = `https://api.spoonacular.com/recipes/complexSearch?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
};

/**
 * Fetches detailed information about a specific recipe by its ID.
 *
 * @param {number|string} id - The ID of the recipe to fetch details for.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response containing recipe details.
 * @throws {Error} - Throws an error if the response is not ok.
 */
export const fetchRecipeDetails = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
};
