import React, { Component } from 'react';
import { Row, Container, Button, Col } from 'reactstrap';
import  { withRouter, Link } from 'react-router-dom'
import Restaurant from '../components/restaurant';
import { getPick } from '../actions/pick';
import { connect } from 'react-redux'

class PickContainer extends Component {
    handleNewPick() {
        let restaurant = this.props.restaurantData[Math.floor(Math.random()*this.props.restaurantData.length)]
        this.props.dispatch(getPick(restaurant))
        this.props.history.push(`${ restaurant.id }`)
    }

    render() {
        const restaurant = this.props.pick.restaurant
        return (
            <Container>
                <div style={{padding: '1rem'}}>
                    <Button size="lg" color="danger" onClick={() => this.handleNewPick()}>Gimme Another Pick!</Button>{' '}
                    <Link to="/restaurants"><Button size="lg" color="danger">View a List of Restaunts</Button></Link>{' '}
                    <Link to="/hungry"><Button size="lg" color="danger">Back</Button></Link>
                </div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} >
                        <Restaurant key={restaurant.id} restaurant={restaurant} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
        pick: state.pick
    }
}
  
export default withRouter(connect(mapStateToProps)(PickContainer))