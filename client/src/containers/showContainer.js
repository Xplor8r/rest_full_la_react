import React, { Component } from 'react';
import { Row, Container, Button, Col } from 'reactstrap';
import  { Link } from 'react-router-dom'
import Restaurant from '../components/restaurant';
import { connect } from 'react-redux'
import { fetchRestaurantData } from '../actions/restaurants'

class showContainer extends Component {
    componentDidMount() {
        this.props.fetchRestaurantData();
    }

    render() {
        const restaurant = this.props.location.state.restaurant
        return (
            <Container>
                <div style={{padding: '1rem'}}>
                    <Link to="/pick"><Button style={{ marginRight: '.5rem' }} size="lg" color="danger" >Get a Random Pick</Button></Link>{' '}
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
        dataFetch: state.dataFetch,
        restaurantData: state.restaurantData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurantData: () => dispatch(fetchRestaurantData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showContainer)