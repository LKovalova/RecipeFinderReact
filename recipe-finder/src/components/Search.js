import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input 
        type="text" 
        placeholder="Search for recipes..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
    </div>
  );
};

export default Search;

