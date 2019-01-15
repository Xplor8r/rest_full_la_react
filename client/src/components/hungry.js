import React from 'react';
import { Button, Row } from 'reactstrap';
import  { Link } from 'react-router-dom'

class Hungry extends React.Component {
    render() {
        return (
            <Row className="col-sm-4 text-center">
                <h5>Are you hungry? Need help finding a restaurant?</h5>
                <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/restaurants"><Button>View a List of Restaunts</Button></Link>  <Link to="/goodbye"><Button>No Thanks</Button></Link>
            </Row>
        )
    }
}

export default Hungry