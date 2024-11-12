import React from 'react';

const FavoritePets = ({ favorites }) => {
  return (
    <div className="favorite-pets">
      <h1>My Favorite Pets</h1>
      {favorites.length > 0 ? (
        favorites.map((pet) => (
          <div key={pet.id} className="favorite-pet">
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age} years</p>
            <p>{pet.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritePets;
