import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>  <Link to="/goodbye"><Button>No</Button></Link>
        </div>
    )
}

export default Welcome