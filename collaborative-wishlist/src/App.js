import React from 'react';
import './App.css';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import WishlistCard from './WishlistCard.jsx';



const WishlistApp = () => {
  return (
    <div className="appContainer">
      <Header className="header"/>
      <main className="mainContent">
        <SearchBar className="searchBar" />
        <WishlistCard
          className="wishlistCard"
          name="Wishlist Name"
          itemCount={10}
          collaboratorCount={5}
          ownerName="John Doe"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/806dc273fe6af9535e626c58216347e7b067399ec18a0c07e2b840fea7328b77?apiKey=f26241707f634688924ec6932fe814fb&"
          ownerIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1fdbfd18a73e990072f2f0f6541bc83f202535b12da2382a052b2090fbfb7440?apiKey=f26241707f634688924ec6932fe814fb&"
        />
      </main>
    </div>
  );
};

export default WishlistApp;
