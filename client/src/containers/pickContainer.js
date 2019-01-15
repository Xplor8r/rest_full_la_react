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
            <Col className="text-center">
                <Button onClick={() => this.handleNewPick()}>Gimme Another Pick!</Button> <Link to="/restaurants"><Button>View a List of Restaunts</Button></Link> <Link to="/"><Button>Home</Button></Link>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Restaurant key={restaurant.id} restaurant={restaurant} />
                    </Col>
                </Row>
            </Col>
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