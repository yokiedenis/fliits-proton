import React from 'react';
import '../styles/Footer.css'; 
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import ShareButton from './ShareButton';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="logo">
        <a href="#">FL<span style={{ color: 'gold' }}>ii</span>TS</a>
      </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/policies">Policies</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="/host">Host with Us</a></li>
            <li><a href="/ride">Ride with Us</a></li>
            <li><a href="/host-tools">Host Tools</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <ul>
            <li><a href="/africa">Africa</a></li>
            <li><a href="/asia">Asia</a></li>
            <li><a href="/north-america">North America</a></li>
            <li><a href="/south-america">South America</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;