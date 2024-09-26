import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipeDetails } from "../api";

/**
 * RecipeDetail component that fetches and displays detailed information about a recipe.
 *
 * @returns {JSX.Element} The rendered recipe detail view.
 */
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const healthInfoItems = new Set();
  recipe.diets.forEach((diet) => {
    healthInfoItems.add(diet.toLowerCase());
  });

  if (recipe.glutenFree) healthInfoItems.add("gluten free");
  if (recipe.vegan) healthInfoItems.add("vegan");
  if (recipe.vegetarian) healthInfoItems.add("vegetarian");
  if (recipe.dairyFree) healthInfoItems.add("dairy free");
  if (recipe.nutFree) healthInfoItems.add("nut free");

  const healthInfoString =
    Array.from(healthInfoItems).join(", ") || "No specific health information";

  return (
    <div>
      <div className="button-group mt-3 text-center">
        <Link to="/" className="btnSearch align-left">
          Back to Home
        </Link>
      </div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid" />

      <div id="healthInfo" className="mt-3">
        <p>
          <strong>Health Information:</strong> {healthInfoString}
        </p>
      </div>

      <div id="servingsInfo">
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>

      <div id="readyInInfo">
        <p>
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={`${ingredient.id}-${index}`}>
            {ingredient.name} - {ingredient.amount} {ingredient.unit}
          </li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div>{recipe.instructions || "No instructions available."}</div>
      <div className="button-group mt-3 text-center">
        <Link to="/" className="btnSearch align-left">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
