import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

const NavMenu = () => {
  return (
    <div className="nav-menu" id="nav-menu">
      <div className="menu-content">
        <div className="nav-links">
          <img src="/assets/icons/car.png" alt="car" />
          <Link to="/host">Be a Host</Link>
        </div>
        <div className="nav-links">
          <img src="/assets/icons/about.png" alt="about" />
          <Link to="/about">About</Link>
        </div>
        <div className="nav-links">
          <img src="/assets/icons/calculator.png" alt="calculator" />
          <Link to="/calculator">Calculator</Link>
        </div>
        <div className="nav-links">
          <img src="/assets/icons/customer-service.png" alt="contact support" />
          <Link to="/contact">Contact Support</Link>
        </div>
        <div className="nav-links">
          <img src="/assets/icons/support.png" alt="tools" />
          <Link to="/tools">Tools</Link>
        </div>
        <div className="nav-links">
          <img src="/assets/icons/careers.png" alt="careers" />
          <Link to="/careers">Careers</Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
