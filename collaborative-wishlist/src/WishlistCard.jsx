import React from 'react';
import './App.css';

const WishlistCard = ({ name, itemCount, collaboratorCount, ownerName, imageSrc, ownerIconSrc }) => {
  return (
    <article className="wishlistCard">
      <div className="imageContainer">
        <img loading="lazy" src={imageSrc} alt="Wishlist thumbnail" className="wishlistImage" />
      </div>
      <h2 className="wishlistName">{name}</h2>
      <p className="wishlistInfo">Items: {itemCount}</p>
      <p className="wishlistInfo">Collaborators: {collaboratorCount}</p>
      <div className="ownerInfo">
        <p className="ownerName">Owner: {ownerName}</p>
        <img loading="lazy" src={ownerIconSrc} alt={`${ownerName}'s profile icon`} className="ownerIcon" />
      </div>
    </article>
  );
};

export default WishlistCard;