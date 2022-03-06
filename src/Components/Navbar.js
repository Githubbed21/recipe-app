import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='NavBar'>
      <Link to="/">Home</Link>
      <Link to="/postForm"> postForm</Link>
      <Link to="/recipes"> Recipes</Link>
    </div>
  );
}
