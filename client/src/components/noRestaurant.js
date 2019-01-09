import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

class NoRestaurantFound extends React.Component {
    render() {
        return (
            <div>
                <h5>No Restaurant Found</h5>
                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}

export default NoRestaurantFound
