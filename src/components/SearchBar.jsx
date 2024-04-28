// components/SearchBar.js
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const SearchBar = () => {
  const { handleSearch } = useContext(TodoContext);

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;