import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PetList from './Components/PetList';
import FavoritePets from './Components/FavoritePets';
import PetDetailPage from './Components/PetDetails';
import NavBar from './Components/Navbar'; 

const API_URL = "https://json-server-backend-x08i.onrender.com/pets";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [pets, setPets] = useState([]);
  const [searchType, setSearchType] = useState('');


  const fetchPets = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Failed to fetch pets: ${response.statusText}`);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleFavorite = (pet) => {
    if (!favorites.some(favoritePet => favoritePet.id === pet.id)) {
      setFavorites([...favorites, pet]);
    }
  };

  const handleRemoveFromFavorites = (petId) => {
    setFavorites(favorites.filter(pet => pet.id !== petId));
  };

  const toggleView = () => setShowFavorites(!showFavorites);


  const handleDeletePet = async (petId) => {
    try {
      await fetch(`${API_URL}/${petId}`, { method: "DELETE" });
      setPets(pets.filter(pet => pet.id !== petId));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  const handleUpdatePet = async (petId, updatedPet) => {
    try {
      const response = await fetch(`${API_URL}/${petId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPet),
      });
      if (!response.ok) throw new Error("Failed to update pet");
      const updated = await response.json();
      setPets(pets.map(pet => pet.id === petId ? updated : pet)); 
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  const filteredPets = pets.filter(pet => 
    pet.type.toLowerCase().includes(searchType.toLowerCase())
  ); 

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) setFavorites(storedFavorites);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}> 
      <div className="App">
        <NavBar showFavorites={showFavorites} toggleView={toggleView} />
        <input 
          type="text" 
          placeholder="Search by type" 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)} 
          className="search-bar" 
        />
        <h1>WELCOME TO THE PET SHOP</h1>
        <Routes> 
          <Route 
            path="/" 
            element={
              showFavorites ? (
                <FavoritePets favorites={favorites} onRemove={handleRemoveFromFavorites} />
              ) : (
                <PetList 
                  pets={filteredPets} 
                  onFavorite={handleFavorite} 
                  onDelete={handleDeletePet}   
                  onUpdate={handleUpdatePet}
                  searchType={searchType}  
                  onSearchChange={(e) => setSearchType(e.target.value)}   
                />
              )
            } 
          />
          <Route 
            path="/favorites" 
            element={<FavoritePets favorites={favorites} onRemove={handleRemoveFromFavorites} />} 
          />
          <Route 
            path="/pet/:id" 
            element={<PetDetailPage pets={pets} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
