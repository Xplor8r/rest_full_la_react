import React from 'react';
import Restaurant from '../components/restaurant';

const Restaurants = ({ restaurants }) => {
  return (
      <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
      </div>

  )
}

export default Restaurants
