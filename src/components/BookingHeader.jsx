// Header.jsx
import React, { useState } from 'react';
import '../styles/BookingHeader.css';
import { FaUserPlus, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import Login from '../components/Loginpage';
import SignUp from '../components/Signup';
import NavMenu from './NavMenu'; 

const BookingHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // Track whether to show Login or Sign Up
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMouseEnter = () => {
    setNavMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (!navMenuOpen) {
      setNavMenuOpen(false);
    }
  };

  const handleClick = () => {
    setNavMenuOpen((prev) => !prev); // Toggle the menu on click
  };

  const handleOutsideClick = (e) => {
    if (navMenuOpen && !e.target.closest('.nav-menu') && !e.target.closest('#nav-menu-icon')) {
      setNavMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setNavMenuOpen(false); // Close the nav menu
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [navMenuOpen]);

  return (
    <div className="headercontainer">
      <div className="logo">
        <Link to="/" className="logo-link">
          FL<span style={{ color: 'gold' }}>ii</span>TS
        </Link>
      </div>
      
      <form className="bookingHeader">
        <div className="location">
          <div>
            <input
              type="search"
              name="destination"
              id="destination"
              placeholder="City, Hotel or Airport"
              required
            />
          </div>
        </div>
        <button type="submit" id="Booking-search">
          <FaSearch/>
        </button>
      </form>


      <ul>
        <li>
          <FaUserPlus className="header-icon" id="acc-menu-icon" onClick={() => { toggleModal(); setIsLoginForm(true); }} />
        </li>
        <li 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <FaBars className="header-icon" id="nav-menu-icon" />
        </li>
      </ul>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isLoginForm ? (
              <Login onSignUpLinkClick={() => setIsLoginForm(false)} />
            ) : (
              <SignUp />
            )}
            <button className="close-button" onClick={toggleModal}><FaTimes size={25} /></button>
          </div>
        </div>
      )}
      {navMenuOpen && (
        <>
          <div className={`nav-menu ${navMenuOpen ? 'nav-menu-active' : ''}`}>
            <NavMenu onClose={handleMouseLeave} onLinkClick={handleLinkClick} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookingHeader;
