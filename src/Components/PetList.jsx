import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, onFavorite }) => {
  return (
    <div className="pet-list">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default PetList;
