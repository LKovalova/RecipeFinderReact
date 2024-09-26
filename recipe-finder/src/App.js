import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchRecipes } from "./api";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

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
      <Search onSearch={handleSearch} />
      <div>
        {searchPerformed ? (
          recipes.map((recipe) => <div key={recipe.id}>{recipe.title}</div>)
        ) : (
          <p>Please perform a search to display results.</p>
        )}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
