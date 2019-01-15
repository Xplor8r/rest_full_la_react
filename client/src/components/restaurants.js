import React from 'react';
import Restaurant from '../components/restaurant';
import { Col } from 'reactstrap';
const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Col className="col-md-3 float-right" >
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        </Col>
      ))}
    </div>
  )
}

export default Restaurants
