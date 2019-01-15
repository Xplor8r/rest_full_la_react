import React from 'react';
import { Button, Row } from 'reactstrap';
import  { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <Row className="col-sm-4 text-center">
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>  <Link to="/goodbye"><Button>No</Button></Link>
        </Row>
    )
}

export default Welcome