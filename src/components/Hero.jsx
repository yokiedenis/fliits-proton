import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <form className="booking">
        <div className="location">
          <div className="booking-titles">
            <FaMapMarkerAlt size={24} />
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
        <div className="separator"></div>
        <div className="dates">
          <div className="booking-titles">
            <FaCalendarAlt size={24} />
            <label htmlFor="start">Date</label>
          </div>
          <div className="booking-inputs">
            <input
              type="text"
              name="start"
              placeholder="Add Date"
              onFocus={(e) => (e.target.type = 'date')}
              required
            />
            <input
              type="text"
              name="stop"
              placeholder="Add Date"
              onFocus={(e) => (e.target.type = 'date')}
              required
            />
          </div>
        </div>
        <div className="separator"></div>
        <div className="time">
          <div className="booking-titles">
            <FaClock size={24}/>
            <label htmlFor="start">Time</label>
          </div>
          <div className="booking-inputs">
            <input
              type="text"
              name="startTime"
              placeholder="Add Time"
              onFocus={(e) => (e.target.type = 'time')}
              required
            />
            <input
              type="text"
              name="stopTime"
              placeholder="Add Time"
              onFocus={(e) => (e.target.type = 'time')}
              required
            />
          </div>
        </div>
        <Link to='/AfterSearch'>
        <button type="submit" id="search" >
          <FaSearch/>
        </button>
        </Link>
      </form>
    </section>
  );
};

export default Hero;
