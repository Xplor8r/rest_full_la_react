import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

const GoodBye = () => {
    return (
        <div>
            <Link to="/hungry"><Button size="lg" color="danger">Please Come Back!</Button></Link>
            <h4>Or try searching for a restaurant at <a href="https://foursquare.com/" >Foursquare</a></h4>
        </div>

    )
}

export default GoodBye
