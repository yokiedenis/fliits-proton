import React, { useState } from 'react';
import BookingHeader from '../components/BookingHeader';
import '../styles/CarShare.css';

function LandingPage() {
  const [activePackage, setActivePackage] = useState('secure');

  const showSecure = () => setActivePackage('secure');
  const showStandard = () => setActivePackage('standard');

  return (
    <div className="landing-page">

      <BookingHeader />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Turn Your Car into Extra Cash!</h1>
          <p>Share your car, earn effortlessly. No commitments, no hassles, just opportunities.</p>
          <div className="hero-buttons">
            <button className="button-demo">
              <span className="play-icon">▶</span>
              View demo
            </button>
            <button className="button-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-image">
            <img src="/car-keys.jpg" alt="Handing over car keys" />
          </div>
          <div className="feature-text">
            <p>
              Unlock the earning potential of your car by sharing it with trusted drivers 
              in your community. Whether you have a second car sitting idle or just want 
              to make the most of your vehicle, <span className="brand-highlight">FL<span className="highlight">ii</span>TS</span> makes 
              it easy and secure to turn your car into a source of extra income.
            </p>
            <p className="feature-cta">Start sharing today and watch your earnings grow!</p>
            <button className="button-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* FLiiTS Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          {/* Package Buttons */}
          <div className="package-options-buttons">
            <button 
              className={`package-button ${activePackage === 'secure' ? 'active' : ''}`}
              onClick={showSecure}
            >
              <p className="package-title">FL<span style={{ color: 'gold' }}>ii</span>TS Secure</p>
            </button>
            <button 
              className={`package-button ${activePackage === 'standard' ? 'active' : ''}`}
              onClick={showStandard}
            >
              <p className="package-title">FL<span style={{ color: 'gold' }}>ii</span>TS Standard</p>
            </button>
          </div>
        <div className="packages-info">
          {/* Fliits Secure */}
        
        </div>
        </div>
        <a href="#" className="learn-more-link">
          <p>Learn more about FL<span style={{ color: "gold" }}>ii</span>TS Packages</p>
        </a>
      </section>
    </div>
  );
}

export default LandingPage;
