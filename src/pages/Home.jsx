import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">

      {/* Sample Information section */}
      <p className="content-heading">Share Your Car With FL<span style={{ color: 'gold' }}>ii</span>TS</p>
      <div className="content-section">
        <div className="content-image">
          <img src="images/share.webp" alt="Share your car with FLiiTS" />
        </div>
        <div className="content-text">
          <div className="content-subtext">
            <p className="section-subtext">Unlock the potential of your vehicle by joining the <b>FL<span style={{ color: 'gold' }}>ii</span>TS</b> community. Earn extra income by renting out your car when you're not using it. It's simple, safe, and rewarding.</p>
            <a href="host.html" className="share-car-button">Share Your Car</a>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="works-section">
        <p className="content-heading">How FL<span style={{ color: 'gold' }}>ii</span>TS Works</p>
        <div className="fliits-options-buttons">
          <div id="rider-button">
            <button id="fliits-rider" className="fliits-work-buttons" onClick={() => showriders()}>
              <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Rider</span>
            </button>
          </div>
          <div id="host-button">
            <button id="fliits-host" className="fliits-work-buttons" onClick={() => showhosts()}>
              <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Host</span>
            </button>
          </div>
        </div>

        <div className="how-we-work">
          <div className="works-content" id="riders">
            <ul className="rider-list">
              <li>
                <strong>Browse Cars:</strong> Explore a wide range of cars available for rent near you. Filter by make, model, price, and location and find the perfect vehicle for your needs.
              </li>
              <li>
                <strong>Book Your Ride:</strong> Select your desired car and choose the dates you need it. Review the rental terms and conditions and proceed to book. You’ll receive a confirmation once the owner approves.
              </li>
              <li>
                <strong>Pick Up and Enjoy:</strong> Coordinate with the car owner to arrange a pick-up. Inspect the car, note damages, and start your journey.
              </li>
              <a href="rides.html" className="share-car-button">Order a ride</a>
            </ul>
          </div>

          {/* FLiiTS Host */}
          <div className="works-content" id="hosts">
            <ul className="hosts-list">
              <li>
                <strong>List Your Car:</strong> Create a detailed listing for your car including photos, a thorough description, availability, and pricing. Set your rules and requirements for renters.
              </li>
              <li>
                <strong>Approve Bookings:</strong> Receive booking requests from potential renters. Review their profiles and rental history, approve or decline requests based on your comfort level.
              </li>
              <li>
                <strong>Meet and Greet:</strong> Arrange a meeting with the renter. Hand over the keys and ensure the renter understands all instructions for your vehicle.
              </li>
              <a href="host.html" className="share-car-button">Share Your Car</a>
            </ul>
          </div>
        </div>
      </div>

      {/* Book your style section */}
      <p className="content-heading">Browse our limitless car sharing marketplace</p>
      <center><a href="rides.html" className="share-car-button">Book Your Style</a></center>
      <br />

      {/* Car type options */}
      <section className="cars">
        {['benz', 'bmw', 'jeep', 'subaru'].map((car, index) => (
          <div className="card-container" key={index}>
            <div className="cards">
              <a href="#">
                <img src={`images/${car}.jfif`} alt={car} />
                <p className="label1">{car.charAt(0).toUpperCase() + car.slice(1)}</p>
              </a>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;
