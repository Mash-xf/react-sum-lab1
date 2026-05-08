import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue.trim());
  };

  return (
    <div className="card mb-8">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search projects..."
          className="input-field"
          style={{ width: '50%' }}
        />
        <button type="submit" className="button-primary" style={{ width: 'auto', padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
