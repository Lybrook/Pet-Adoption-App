import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets = [], onFavorite, onDelete }) => {
  if (pets.length === 0) {
    return (
      <div className="pet-list">
        <p>No pets found.</p>
      </div>
    );
  }

  return (
    <div className="pet-list">
      {pets.map(pet => (
        <PetCard 
          key={pet.id}
          pet={pet} 
          onFavorite={onFavorite} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default PetList;