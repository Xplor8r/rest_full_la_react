import React from 'react';
import Restaurant from '../components/restaurant';
import { CardGroup } from 'reactstrap';
const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <CardGroup key={restaurant.id} className="col-md-4 float-left" sm="12" md={{ size: 6, offset: 3 }} style={{height: '500px'}}>
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        </CardGroup>
      ))}
    </div>
  )
}

export default Restaurants
