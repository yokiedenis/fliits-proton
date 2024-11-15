import React, {useState} from 'react'
import {FaStar, FaHeart, FaMedal, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/CarCard.css'

function CarCard({items}) {

  //for loop for handling display of rating stars
let ratingIcon = [];
for(let icon = 0; icon < (items.stars);  icon++){
      ratingIcon.push(<FaStar key={icon}/>);
}

//function for changing color of the like icon when clicked
const [iconColor, setIconColor] = useState('black');
const handleClick = () =>{
  setIconColor(iconColor === 'black' ? 'gold' : 'black')
};


  return (
    <div className='Card-container'> 
    <img src={items.img} alt="Car-image" className='car-img'/>
    <div className="car-info">

      <div className="car-name">
      <h4>{items.name}</h4>
      <div className='heart-icon'><FaHeart style={{ color: iconColor, cursor: 'pointer' }} onClick={handleClick}/></div>
      </div>

      <div className="car-rating">
      {ratingIcon && <p className='car-star'>{items.rating} {ratingIcon}</p>}
      <p className='car-trip'>
      <FaMedal /> {items.trips} Trips</p>
      </div>

      <div className="car-location">
        <p>
        <FaMapMarkerAlt />
        {items.location}</p>
      </div>
    <p className='car-price'>${items.price} total</p>
    </div>
    </div>
  )
}

export default CarCard