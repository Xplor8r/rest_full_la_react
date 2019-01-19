import React from 'react';
import { Button, Col } from 'reactstrap';
import  { Link } from 'react-router-dom'


const Welcome = () => {
    return (
        <Col>
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>  <Link to="/goodbye"><Button>No</Button></Link>
        </Col>
    )
}

export default Welcome