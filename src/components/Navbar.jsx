import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoLOA from '../assets/images/loa-logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isToggled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]); 

  const navbarStyles = {
    backgroundColor: isToggled ? 'rgba(220, 218, 218, 0.03)' : 'rgba(0, 0, 0, 0.04)',
    transition: 'background-color 0.3s ease',
  };

  const navPopupStyles = {
    backgroundColor: isToggled ? 'rgba(149, 148, 148, 0.87)' : 'rgba(3, 3, 3, 0.92)',
  };

  return (
    <div>
      <nav style={navbarStyles}>
        <div id="main-nav-wrap" className={isMenuOpen ? 'open' : ''}>
          <div className="top-bar">
            <div className="logo">
              <Link to="/">
                <img src={logoLOA} alt="Logo" />
              </Link>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
              <span>☰</span>
            </button>

            <div className={`menu-popup ${isMenuOpen ? 'open' : ''}`} style={navPopupStyles}>
              <button className="close-button" onClick={closeMenu}>
                <span>x</span>
              </button>
              <ul className={`main-navigation ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/portfolio">
                  <li>Portfolio</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
