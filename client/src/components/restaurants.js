import React from 'react';
import Restaurant from '../components/restaurant';
import { CardGroup } from 'reactstrap';
const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <CardGroup className="col-md-4 float-right" style={{height: '500px'}}>
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        </CardGroup>
      ))}
    </div>
  )
}

export default Restaurants
