import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue.trim());
  };

  return (
    <div className="card mb-8">
      <form className="flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search projects..."
          className="input-field flex-1"
        />
        <button type="submit" className="button-primary md:w-36">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
