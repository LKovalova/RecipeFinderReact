import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchRecipes } from "./api";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (query, cuisine) => {
    const data = await fetchRecipes(query, cuisine, 1, 5);
    setRecipes(data.results);
    setSearchPerformed(true);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search onSearch={handleSearch} />
                <div id="results" className="mt-3">
                  {searchPerformed ? (
                    recipes.length > 0 ? (
                      <>
                        {recipes.map((recipe) => (
                          <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                      </>
                    ) : (
                      <p>No recipes found. Try a different search.</p>
                    )
                  ) : (
                    <p>Please perform a search to display results.</p>
                  )}
                </div>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
