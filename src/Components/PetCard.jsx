import { useState } from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet, onFavorite, onDelete }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    onFavorite(pet);
    setIsFavorited(true);
  };

  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h3 className='pet-name'>{pet.name}</h3>
      <p className='pet-type'>Type: {pet.type}</p>
      <button 
        onClick={handleFavoriteClick} 
        disabled={isFavorited}
        className="favorite-button"
      >
        {isFavorited ? 'Unavailable' : 'Adopt'}
      </button>
      <button onClick={() => onDelete(pet.id)} className="delete-button">Delete Pet</button>
      <Link to={`/pet/${pet.id}`} className="view-details-link">View Details</Link>
    </div>
  );
};

export default PetCard;
