import React from 'react';

const PetCard = ({ pet, onFavorite }) => {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age} years</p>
      <p>{pet.description}</p>
      <button onClick={() => onFavorite(pet)}>Add to Favorites</button>
    </div>
  );
};

export default PetCard;
