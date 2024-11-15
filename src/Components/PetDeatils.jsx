import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetailPage = ({ pets }) => {
  const { id } = useParams();
  const pet = pets.find((pet) => pet.id.toString() === id);

  if (!pet) return <p>Pet not found</p>;

  return (
    <div className="pet-detail">
      <img src={pet.image} alt={`${pet.name} (${pet.type.replace(",", ", ")})`} className="pet-image" />
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age} years</p>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetailPage;
