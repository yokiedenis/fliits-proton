import React from 'react'
import BookingHeader from '../components/BookingHeader'
import { FaFilter } from 'react-icons/fa';
import '../styles/AfterSearch.css'

function AfterSearch() {
  return (
      <div className='AfterSearch-container'>
          <BookingHeader />
          <div className="search-Container">
            <div className="search-filter">
                <div className="filter-icon">
                <FaFilter />
                </div>
                <div className="filters">
                    <h5>Price</h5>
                </div>
                <div className="filters">
                    <h5>Vechicle type</h5>
                </div>
                <div className="filters">
                    <h5>Model</h5>
                </div>
                <div className="filters">
                    <h5>Seats</h5>
                </div>
                <div className="filters">
                    <h5>Electric</h5>
                </div>
                <div className="filters">
                    <h5>Deliver</h5>
                </div>
                <div className="filters">
                    <h5>All filters</h5>
                </div>
            </div>
          </div>
          <div className="separater"></div>
            <div className="Search-results">
                <div className="car-results">
                <h1>Car results</h1>
                <h1>Car results</h1>
                <h1>Car results</h1>
                <h1>Car results</h1>
                <h1>Car results</h1>
                </div>
                <div className="map-results">
                    <h1>MAPS</h1>
                    <h1>MAPS</h1>
                    <h1>MAPS</h1>
                    <h1>MAPS</h1>
                </div>
            </div>
    </div>
  )
}

export default AfterSearch

