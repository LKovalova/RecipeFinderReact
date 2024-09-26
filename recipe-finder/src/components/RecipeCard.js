import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card recipe-card">
      <img src={recipe.image} className="img-fluid" alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <a href={`/recipe/${recipe.id}`} className="btnSearch">
          View Details
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;