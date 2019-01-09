import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

class Hungry extends React.Component {
    render() {
        return (
            <div>
                <h5>Are you hungry? Need help finding a restaurant?</h5>
                <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/restaurants"><Button>View a List of Restaunts</Button></Link>
            </div>
        )
    }
}

export default Hungry