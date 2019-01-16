import React from 'react';
import { Button, Col, Media } from 'reactstrap';
import  { Link } from 'react-router-dom'
import restaurant from "../images/restaurant.jpg"

const Hungry = () => {
    return (
        <Col className="text-center">
            <Media top width="50%" src={restaurant} alt="Card image cap" />
            <h5>Are you hungry? Need help finding a restaurant?</h5>
            <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/restaurants"><Button>View a List of Restaunts</Button></Link>  <Link to="/goodbye"><Button>No Thanks</Button></Link>
        </Col>
    )
}

export default Hungry
