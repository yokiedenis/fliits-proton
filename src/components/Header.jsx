import React from 'react';
import '../styles/Header.css';
import { FaUserPlus, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="logo">
        <a href="#">FL<span style={{ color: 'gold' }}>ii</span>TS</a>
      </div>
      <div className="header-button">
        <a href="host.html" className="share-car-button-header">Share Your Car</a>
      </div>
      <ul>
        <li>
          <FaUserPlus
            className="header-icon"
            id="acc-menu-icon"
            onClick={() => console.log('Login Menu Toggled')}
          />
        </li>
        <li>
          <FaBars
            className="header-icon"
            id="nav-menu-icon"
            onClick={() => console.log('Nav Menu Toggled')}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
