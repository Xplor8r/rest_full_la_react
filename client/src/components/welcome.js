import React from 'react';
import { Button } from 'reactstrap';
import  { BrowserRouter as Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h5>Are you in LA?</h5>
            <Link to="/hungry"><Button>Yes</Button></Link>
        </div>
    )
}

export default Welcome