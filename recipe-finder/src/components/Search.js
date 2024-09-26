import React, { useState } from "react";

/**
 * Search component that allows users to input search queries and select cuisines.
 *
 * @param {function} onSearch - Callback function to execute search with the provided query and cuisine.
 * @returns {JSX.Element} The rendered search input and controls.
 */
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");

  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const handleSearch = () => {
    onSearch(query, cuisine);
  };

  return (
    <div className="mt-4 text-center">
      <h1>Recipe Finder</h1>
      <p className="mt-2 text-center">
        <i>
          Search for recipes by name or ingredient, and select a cuisine to
          filter your results.
        </i>
      </p>

      <div className="form-group">
        <input
          type="text"
          id="searchInput"
          className="form-control"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="button-group mt-3 text-center">
          <button
            id="searchButton"
            className="btnSearch"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            id="resetButton"
            className="btnReset"
            onClick={() => {
              setQuery("");
              setCuisine("");
              handleSearch();
            }}
          >
            Reset
          </button>
        </div>
        <select
          className="form-select mt-3"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
