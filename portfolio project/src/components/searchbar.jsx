import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search projects..."
      />
      <button type="submit">    
        Search  
      </button>
    </form>
  );
}

export default SearchBar;
