import React from 'react';
import './App.css';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search wishlists..." className="searchInput" aria-label="Search wishlists" />
      <button className="createButton">Create New Wishlist</button>
    </div>
  );
};

export default SearchBar;