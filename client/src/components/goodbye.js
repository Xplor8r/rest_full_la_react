import React from 'react';
import { Button, Col } from 'reactstrap';
import  { Link } from 'react-router-dom'


const GoodBye = () => {
    return (
        <Col className="text-center">
            <p>Try searching for a restaurant at <a href="https://foursquare.com/" >Foursquare</a></p>
            <Link to="/hungry"><Button>Please Come Back!</Button></Link>
        </Col>

    )
}

export default GoodBye
