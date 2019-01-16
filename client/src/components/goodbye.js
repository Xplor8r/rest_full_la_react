import React from 'react';
import { Button, Media, Col } from 'reactstrap';
import  { Link } from 'react-router-dom'
import restaurant from "../images/restaurant.jpg"

const GoodBye = () => {
    return (
        <Col className="text-center">
            <Media top width="50%" src={restaurant} alt="Card image cap" /><br/>
            <Link to="/hungry"><Button>Please Come Back!</Button></Link>
            <p>Or try searching for a restaurant at <a href="https://foursquare.com/" >Foursquare</a></p>
        </Col>

    )
}

export default GoodBye
