import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

class NoRestaurantFound extends React.Component {
    render() {
        return (
            <div>
                <h5>Goodbye</h5>
                <p>Try searching for a restaurant at <a href="https://foursquare.com/" >Foursquare</a></p>

                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}

export default NoRestaurantFound
