import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="appLogo">Collaborative Wishlist🛒</h1>
      <nav className="navLinks">
        <a href="./homepage/BestSellingProducts.jsx" className="navLink">Home</a>
        <a href="#profile" className="navLink">Profile</a>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1237dd3038ee15dc2ab27fc9a340765afb39d1e2343f13a696f6a6d5d417f557?apiKey=f26241707f634688924ec6932fe814fb&" alt="" className="profileIcon" />
      </nav>
    </header>
  );
};

export default Header;