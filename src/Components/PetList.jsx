import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, onFavorite, onDelete, onUpdate, }) => {
  return (
    <div className="pet-list">
      {pets.map(pet => (
        <div key={pet.id}>
          <PetCard 
            pet={pet} 
            onFavorite={onFavorite} 
            onUpdate={onUpdate} 
            onDelete={onDelete} 
          />
        </div>
      ))}
    </div>
  );
};

export default PetList;
