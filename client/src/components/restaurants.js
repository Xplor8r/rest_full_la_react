import React from 'react';
import Restaurant from '../components/restaurant';
import { CardColumns, Row } from 'reactstrap';
const Restaurants = ({ restaurants }) => {
  return (
    <Row className="justify-content-sm-center">
    <CardColumns>
      {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </CardColumns>
    </Row>
  )
}

export default Restaurants
