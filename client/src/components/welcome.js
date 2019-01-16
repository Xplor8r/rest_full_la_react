import React from 'react';
import { Button, Col, Media } from 'reactstrap';
import  { Link } from 'react-router-dom'
import restaurant from "../images/restaurant.jpg"

const Welcome = () => {
    return (
        <Col className="text-center">
            <Media top width="50%" src={restaurant} alt="Card image cap" />
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>  <Link to="/goodbye"><Button>No</Button></Link>
        </Col>
    )
}

export default Welcome