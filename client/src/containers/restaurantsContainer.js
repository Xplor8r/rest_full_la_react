import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurants from '../components/restaurants';
import { Filter } from '../components/filterForm';
import NoDelivery from '../components/noDelivery';
import ModalForm from '../components/newRestaurantForm';

const getRestaurants = (restaurants, filter) => {
   //has delivery
    if (filter.categoryFilter.length === 0 && filter.deliveryFilter === true) {
        return restaurants.filter((restaurant) => restaurant.delivery);
    //has delivery and matches category
    } else if (filter.categoryFilter.length !== 0 && filter.deliveryFilter === true) {
        let filteredByCategoryRestaurants = restaurants.filter((restaurant) => restaurant.categories.map(cat => cat.name)[0] === filter.categoryFilter[0]);
        return filteredByCategoryRestaurants.filter((restaurant) => restaurant.delivery);
    //matches category
    } else if (filter.categoryFilter.length !== 0 && filter.deliveryFilter === false) {
        return restaurants.filter((restaurant) => restaurant.categories.map(cat => cat.name)[0] === filter.categoryFilter[0]);
    } else if (filter.categoryFilter.length === 0 && filter.deliveryFilter === false) {
        return restaurants;
    } else { return restaurants }
}
   
export class RestaurantsContainer extends Component {
    render() {
        let restaurants = getRestaurants(this.props.restaurantData, this.props.filter)
        return (
            <Container>
                <Row>
                    <Col className="clearfix" style={{padding: '1rem'}}>
                        <Filter />
                        <Link to="/pick"><Button size="lg" color="danger">Get a Random Pick</Button></Link>{' '}
                        <Link to="/hungry"><Button size="lg" color="danger">Back</Button></Link>{' '}
                        <ModalForm />
                    </Col>
                </Row> 
                {restaurants.length === 0? 
                    <NoDelivery />:
                    <Restaurants restaurants={restaurants} />}                        
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
        filter: state.filter
    }
  }
  
export default RestaurantsContainer = connect(mapStateToProps)(RestaurantsContainer)
