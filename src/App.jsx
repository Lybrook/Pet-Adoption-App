import React, { useState } from 'react';
import './App.css';
import PetList from './Components/PetList';
import FavoritePets from './Components/FavotritePets';

function App() {
  const [favorites, setFavorites] = useState([]);
  const pets = [
    { id: 1, name: "Simba", type: "dog", age: 3, description: "Friendly dog looking for a loving home." },
    { id: 2, name: "Puss", type: "cat", age: 2, description: "Independent but cuddly." },
    { id: 3, name: "Bosco", type: "dog", age: 4, description: "Energetic and playful." },
    { id: 4, name: "Fluffy", type: "cat", age: 1, description: "Curious and loves attention." }
  ];

  const handleFavorite = (pet) => {
    console.log(`${pet.name} added to favorites!`);
    if (!favorites.some(favoritePet => favoritePet.id === pet.id)) {
      setFavorites([...favorites, pet]);
    }
  };

  return (
    <div className="App">
      <header>Pet Adoption Platform</header>
      <PetList pets={pets} onFavorite={handleFavorite} />
      <FavoritePets favorites={favorites} />
    </div>
  );
}

export default App;
