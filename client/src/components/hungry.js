import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

const Hungry = () => {
    return (
        <div>
            <h4>Are you hungry? Need help finding a restaurant?</h4>
            <Link to="/pick"><Button size="lg" color="danger">Get a Random Pick</Button></Link>{' '}
            <Link to="/restaurants"><Button size="lg" color="danger">View a List of Restaunts</Button></Link>{' '}
            <Link to="/goodbye"><Button size="lg" color="danger">No Thanks</Button></Link>
        </div>
    )
}

export default Hungry
