import { useState } from 'react';
import ShareButton from './ShareButton';
import '../styles/Header.css';
import { FaUserPlus, FaBars } from 'react-icons/fa';
import Login from './Loginpage'; // Import the Login component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="headercontainer">
      <div className="logo">
        <a href="#">FL<span style={{ color: 'gold' }}>ii</span>TS</a>
      </div>
      <ShareButton />
      <ul>
        <li>
          {/* Toggle modal on FaUserPlus click */}
          <FaUserPlus className="header-icon" id="acc-menu-icon" onClick={toggleModal} />
        </li>
        <li>
            <FaBars
              className="header-icon"
              id="nav-menu-icon"
              onClick={() => console.log('Nav Menu Toggled')}
            />
        </li>
      </ul>

      {/* Render the Login modal if isModalOpen is true */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login />
            <button className="close-button" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;