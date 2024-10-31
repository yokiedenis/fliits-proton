import React from 'react';
import '../styles/NavMenu.css';

const NavMenu = () => {
  return (
    <div className="nav-menu" id="nav-menu">
      <div className="menu-content">
        <div className="nav-links">
          <img src="assests/icons/car.png" alt="car" />
          <a href="host.html">Be a Host</a>
        </div>
        <div className="nav-links">
          <img src="assests/icons/about.png" alt="about" />
          <a href="About.html">About</a>
        </div>
        <div className="nav-links">
          <img src="assests/icons/calculator.png" alt="calculator" />
          <a href="Tools.html">Calculator</a>
        </div>
        <div className="nav-links">
          <img src="assests/icons/customer-service.png" alt="contact support" />
          <a href="Contact.html">Contact Support</a>
        </div>
        <div className="nav-links">
          <img src="assests/icons/support.png" alt="tools" />
          <a href="Tools.html">Tools</a>
        </div>
        <div className="nav-links">
          <img src="assests/icons/careers.png" alt="careers" />
          <a href="#">Careers</a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
