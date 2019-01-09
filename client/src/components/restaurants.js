import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

class Restaurants extends React.Component {
    render() {
        return (
            <div>
                <h3>List of LA Restaurants</h3>
                <h4>Filter</h4>
                <ul>
                    <li>Restaurant Data</li>
                </ul>
                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}

export default Restaurants