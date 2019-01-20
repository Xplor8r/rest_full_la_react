import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'


const Welcome = () => {
    return (
        <div>
            <h4>Are you in LA?</h4>
            <Link to="/hungry"><Button size="lg" color="danger">Yes</Button></Link>{' '}
            <Link to="/goodbye"><Button size="lg" color="danger">No</Button></Link>
        </div>
    )
}

export default Welcome