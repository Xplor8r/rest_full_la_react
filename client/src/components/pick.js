import React from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom'

class Pick extends React.Component {
    render() {
        return (
            <div>
                <h5>Pick</h5>
                <Link to="/"><Button>Home</Button></Link>
            </div>
        )
    }
}
export default Pick