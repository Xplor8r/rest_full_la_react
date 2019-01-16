import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurants from '../components/restaurants';
import { Filter } from '../components/filterForm';

const getRestaurants = (restaurants, filter) => {
    let categories = restaurants.map((restaurant) => restaurant.categories.map(cat => cat.name))

    //has delivery
    if (filter.categoryFilter.length === 0 && filter.deliveryFilter === true) {
        return restaurants.filter((restaurant) => restaurant.delivery === true);
    //has delivery and matches category
    } else if (filter.categoryFilter.length !== 0 && filter.deliveryFilter === true) {
        let filteredByCategoryRestaurants = restaurants.filter((restaurant) =>
        restaurant.categories.map(cat => cat.name)[0] === filter.categoryFilter);
        return filteredByCategoryRestaurants.filter((restaurant) => restaurant.delivery === true);
    //matches category
    } else if (filter.categoryFilter.length !== 0 && filter.deliveryFilter === false) {
        console.log(categories)
        return restaurants.filter((restaurant) => restaurant.categories.map(cat => cat.name)[0] === filter.categoryFilter[0]);
    } else { return restaurants}
}
   
export class RestaurantsContainer extends Component {
    render() {
        let restaurants = getRestaurants(this.props.restaurantData, this.props.filter)
        return (
            <Col className="text-center">
                <h3>List of LA Restaurants</h3>
                <Filter />            
                <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/"><Button>Home</Button></Link>
                <Restaurants restaurants={restaurants} />                                     
            </Col>
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
