import React from 'react';
import './App.css';
import PetList from './Components/PetList';

function App() {
  const pets = [
    { id: 1, name: "Simba", type: "dog", age: 3, description: "Friendly dog looking for a loving home." },
    { id: 2, name: "Puss", type: "cat", age: 2, description: "Independent but cuddly." },
    { id: 3, name: "Bosco", type: "dog", age: 4, description: "Energetic and playful." },
    { id: 4, name: "Fluffy", type: "cat", age: 1, description: "Curious and loves attention." }
  ];

  const handleFavorite = (pet) => {
    console.log(`${pet.name} added to favorites!`);
  };

  return (
    <div className="App">
      <h1>Pet Adoption Platform</h1>
      <PetList pets={pets} onFavorite={handleFavorite} />
    </div>
  );
}

export default App;
