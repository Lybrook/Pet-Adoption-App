import React from 'react';

const FavoritePets = ({ favorites, onRemove }) => {
  return (
    <div className="favorite-pets">
      <h1>My Favorite Pets</h1>
      {favorites.length > 0 ? (
        favorites.map((pet) => (
          <div key={pet.id} className="favorite-pet">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3>{pet.name}</h3>
            <button onClick={() => onRemove(pet.id)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritePets;
