import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showFavorites, toggleView }) => (
  <nav className="navbar">
    <p>Pet Adoption Platform</p>
    <Link to="/">Home</Link>
    <button onClick={toggleView}>
      {showFavorites ? 'View All Pets' : 'View Favorites'}
    </button>
  </nav>
);

export default Navbar;
