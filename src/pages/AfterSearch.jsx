import React from 'react'
import BookingHeader from '../components/BookingHeader'
import { FaFilter } from 'react-icons/fa';
import cardata from '../components/cardata'
import '../styles/AfterSearch.css'
import CarCard from '../components/CarCard';
import Map from '../components/Map'

function AfterSearch() {

    const carCards = cardata.map(items =>{
        return(
            <CarCard
            key = {items.id}
            items = {items}
            />
        );
    });

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
                {carCards}
                </div>
                <div className="map-results">
                  <Map />
                </div>
            </div>
          </div>
  )
}

export default AfterSearch

