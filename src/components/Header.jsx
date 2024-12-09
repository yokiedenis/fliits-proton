import React, { useState, useEffect } from 'react';
import ShareButton from './ShareButton';
import '../styles/Header.css';
import { FaUserPlus, FaBars, FaTimes, FaUser, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from '../components/Login';
import SignUp from '../components/Signup';
import NavMenu from './NavMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Store the authenticated user

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsModalOpen(false); // Close modal when user logs in
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    setNavMenuOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (navMenuOpen && !e.target.closest('.nav-menu') && !e.target.closest('#nav-menu-icon')) {
      setNavMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setNavMenuOpen(false);
  };

  useEffect(() => {
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
      <ShareButton />
      <ul>
        <li>
          {!user ? (
            <FaUserPlus
              className="header-icon"
              id="acc-menu-icon"
              onClick={() => {
                toggleModal();
                setIsLoginForm(true);
              }}
            />
          ) : (
            <div className="avatar-dropdown">
              <img
                src={user.photoURL || "/review 1.jpg"}
                alt="profile"
                className="Profile-avatar"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/Dashboard" className="dropdown-item">
                    <FaHome className="Dashboard-icons" />
                    Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item">
                    <FaUser className="Dashboard-icons" />
                    Profile
                  </Link>
                  <button
                    className="loggout dropdown-item"
                    onClick={() => {
                      auth.signOut();
                      setUser(null);
                    }}
                  >
                    <FaSignOutAlt className="Dashboard-icons" />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </li>
        <li onClick={handleClick}>
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
            <button className="close-button" onClick={toggleModal}>
              <FaTimes size={25} />
            </button>
          </div>
        </div>
      )}
      {navMenuOpen && (
        <div className={`nav-menu ${navMenuOpen ? 'nav-menu-active' : ''}`}>
          <NavMenu onClose={() => setNavMenuOpen(false)} onLinkClick={handleLinkClick} />
        </div>
      )}
    </div>
  );
};

export default Header;
