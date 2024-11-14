import React from 'react'
import {FaStar} from 'react-icons/fa'

import '../styles/ReviewCard.css'

const  ReviewCard = ({items})=> {

  let Star = [];
  // Loop to create the number of stars based on the rating
  for (let stars = 0; stars < (items.rating); stars++) {
    Star.push(<FaStar key={stars} />);
  }
  
  return (
      <div className='review-card'>
            <img src= {items.img} className='review-image' />
            <div className='review-content'>
                <h2 className='review-name'>{items.name}</h2>
                <h5 className='profle-type'>{items.type}</h5>
                {Star && <div className='review-rating'>{Star}</div>}
                <p className='review-message'>{items.message}</p>
            </div>
        </div>
  )
}

export default ReviewCard