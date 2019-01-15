import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import  { Link } from 'react-router-dom'
import Restaurant from '../components/restaurant';
import { getPick } from '../actions/pick';
import { connect } from 'react-redux'


class PickContainer extends Component {

    handleNewPick() {
        let restaurant = this.props.restaurantData[Math.floor(Math.random()*this.props.restaurantData.length)]
        this.props.dispatch(getPick(restaurant))
    }

    render() {
        const restaurant = this.props.pick.restaurant
        return (
            <Row>
                <Button onClick={() => this.handleNewPick()}>Gimme Another Pick!</Button> <Link to="/restaurants"><Button>View a List of Restaunts</Button></Link> <Link to="/"><Button>Home</Button></Link>
                <Row className="col-sm-4">
                    <Restaurant key={restaurant.id} restaurant={restaurant} />
                </Row>
            </Row>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
        pick: state.pick
    }
}
  
export default connect(mapStateToProps)(PickContainer)