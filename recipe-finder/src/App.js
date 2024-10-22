import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchRecipes } from "./api";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetails";
import Pagination from "./components/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


/**
 * Main application component that manages state and routes.
 *
 * @returns {JSX.Element} The rendered application.
 */

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const recipesPerPage = 5;

  /**
   * Handles the search for recipes based on the input query and selected cuisine.
   *
   * @param {string} query - The search query entered by the user.
   * @param {string} cuisine - The selected cuisine to filter recipes.
   * @param {number} page - The page number for pagination (default is 1).
   */

  const handleSearch = async (query, cuisine, page = 1) => {
    setQuery(query);
    setCuisine(cuisine);
    const data = await fetchRecipes(query, cuisine, page, recipesPerPage);
    setRecipes(data.results);
    setTotalResults(data.totalResults);
    setSearchPerformed(true);
    setCurrentPage(page);
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
                        <Pagination
                          currentPage={currentPage}
                          totalPages={Math.ceil(totalResults / recipesPerPage)}
                          onPageChange={(page) =>
                            handleSearch(query, cuisine, page)
                          }
                        />
                      </>
                    ) : (
                      <p>No recipes found. Try a different search.</p>
                    )
                  ) : (
                    <p className="text-center">
                      Please perform a search to display results.
                    </p>
                  )}
                </div>
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
