import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Ashwanth<span>Maths</span></h1>
          </Link>
        </div>

        {/* Menu toggle for mobile view */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Navbar links */}
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#subjects">Subjects</a></li>
            <li><a href="#programs">Tutoring Programs</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
