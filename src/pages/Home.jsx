import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Reviews from '../components/ReviewCard';
import BookCarStyle from '../components/BookYourStyle';
import { Link } from 'react-router-dom';
import CarImage from '../assets/images/Share.webp'
import ReviewData from '../components/ReviewData'
import FeedbackButton from '../components/FeedbackButton';



const Home = () => {

  const reviewcard = ReviewData.map(items => {
    return(
    <Reviews 
    key = {items.id}
    items = {items}
    />
  );
  });

  const [activeSection, setActiveSection] = useState('riders'); // Set 'riders' as the default

  const showRiders = () => setActiveSection('riders');
  const showHosts = () => setActiveSection('hosts');


  return (
    <div className="home">
      <Header />
      <Hero />
      
      <FeedbackButton />
      {/* Sample Information section */}
      <p className="content-heading">Share Your Car With FL<span style={{ color: 'gold' }}>ii</span>TS</p>
      <div className="content-section">
        <div className="content-image">
          <img src= {CarImage} alt="Share your car with FLiiTS" />
        </div>
        <div className="content-text">
          <div className="content-subtext">
            <p className="section-subtext">Unlock the potential of your vehicle by joining the <b>FL<span style={{ color: 'gold' }}>ii</span>TS</b> community. Earn extra income by renting out your car when you're not using it. It's simple, safe, and rewarding.</p><br />
            <Link to='/car-listing' className="share-car-button">Share Your Car</Link>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="works-section">
        <p className="content-heading">How FL<span style={{ color: 'gold' }}>ii</span>TS Works</p>
        <div className="fliits-options-buttons">
          <button 
            id="fliits-rider" 
            className={`fliits-work-buttons ${activeSection === 'riders' ? 'active' : ''}`}
            onClick={showRiders}
          >
            <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Rider</span>
          </button>
          <button 
            id="fliits-host" 
            className={`fliits-work-buttons ${activeSection === 'hosts' ? 'active' : ''}`}
            onClick={showHosts}
          >
            <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Host</span>
          </button>
        </div>
        
        <div className="how-we-work">
          {activeSection === 'riders' && (
            <div className="works-content active" id="riders">
              <ul className="rider-list">
                <li><strong>Browse Cars:</strong> Explore a wide range of cars available for rent near you. Filter by make, model, price, and location and find the perfect vehicle for your needs.</li>
                <li><strong>Book Your Ride:</strong> Select your desired car and choose the dates you need it. Review the rental terms and conditions and proceed to book. You’ll receive a confirmation once the owner approves.</li>
                <li><strong>Pick Up and Enjoy:</strong> Coordinate with the car owner to arrange a pick-up. Inspect the car, note damages, and start your journey.</li><br /><br /><br />
                <Link to='/AfterSearch' className="share-car-button">Order a ride</Link>
              </ul>
            </div>
          )}
          
          {activeSection === 'hosts' && (
            <div className="works-content active" id="hosts">
              <ul className="hosts-list">
                <li><strong>List Your Car:</strong> Create a detailed listing for your car including photos, a thorough description, availability, and pricing. Set your rules and requirements for renters.</li>
                <li><strong>Approve Bookings:</strong> Receive booking requests from potential renters. Review their profiles and rental history, approve or decline requests based on your comfort level.</li>
                <li><strong>Meet and Greet:</strong> Arrange a meeting with the renter. Hand over the keys and ensure the renter understands all instructions for your vehicle.</li><br /><br /><br />
                <Link to='/car-listing' className="share-car-button">Share Your Car</Link>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Book your style section */}
      <p className="content-heading">Browse our limitless car sharing marketplace</p><br />
      <center><Link to='/Host' className="share-car-button">Book Your Style</Link></center><br />
      <br />
      <BookCarStyle />
      <br />
      <h1 className='Review-Heading'>Recent Feedback</h1>
      <section className='Review-section'>
      {reviewcard }
    </section>
      <br />
    </div>
  );
};

export default Home;
