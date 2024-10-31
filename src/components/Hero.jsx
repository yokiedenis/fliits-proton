import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <form className="booking">
        <div className="location">
          <div className="booking-titles">
            <i className="fas fa-map-marker-alt"></i>
            <label htmlFor="destination">Location</label>
          </div>
          <div className="booking-inputs">
            <input
              type="search"
              name="destination"
              id="destination"
              placeholder="City, Hotel or Airport"
              required
            />
          </div>
        </div>
        <div className="seperator"></div>
        <div className="dates">
          <div className="booking-titles">
            <i className="fas fa-calendar-alt"></i>
            <label htmlFor="start">Date</label>
          </div>
          <div className="booking-inputs">
            <input type="text" name="start" placeholder="Add Date" onFocus={(e) => (e.target.type = 'date')} required />
            <input type="text" name="stop" placeholder="Add Date" onFocus={(e) => (e.target.type = 'date')} required />
          </div>
        </div>
        <div className="seperator"></div>
        <div className="time">
          <div className="booking-titles">
            <i className="fas fa-clock"></i>
            <label htmlFor="start">Time</label>
          </div>
          <div className="booking-inputs">
            <input type="text" name="start" placeholder="Add Time" onFocus={(e) => (e.target.type = 'time')} required />
            <input type="text" name="stop" placeholder="Add Time" onFocus={(e) => (e.target.type = 'time')} required />
          </div>
        </div>
        <button id="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </section>
  );
};

export default Hero;
