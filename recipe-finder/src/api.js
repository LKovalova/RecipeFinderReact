const apiKey = "cd740a7d200d48499c5bdb0a5e94b196";

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

export const fetchRecipeDetails = async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
};
