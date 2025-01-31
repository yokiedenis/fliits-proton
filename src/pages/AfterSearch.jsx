import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingHeader from '../components/BookingHeader';
import { FaFilter } from 'react-icons/fa';
import cardata from '../components/cardata';
import '../styles/AfterSearch.css';
import CarCard from '../components/CarCard';
import Map from '../components/Map';

function AfterSearch() {
    const location = useLocation();
    const { searchParams } = location.state || { searchParams: {} };

    const carCards = cardata.map(items => {
        return (
            <CarCard
                key={items.id}
                items={items}
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
                        <h5>Vehicle type</h5>
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
            <div className="search-params">
                <h3>Search Results:</h3>
                <p>Location: {searchParams.location}</p>
                <p>Start Date: {searchParams.startDate}</p>
                <p>End Date: {searchParams.endDate}</p>
                <p>Start Time: {searchParams.startTime}</p>
                <p>End Time: {searchParams.endTime}</p>
            </div>
            <div className="Search-results">
                <div className="car-results">
                    {carCards}
                </div>
                <div className="map-results">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default AfterSearch;