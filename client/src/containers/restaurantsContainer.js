import React, { Component } from 'react';
import { Button } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurants from '../components/restaurants';


export class RestaurantsContainer extends Component {
    render() {
        var restaurants = this.props.restaurantData.map((restaurant) => {
             return restaurant
        })
        return (
            <div>
                <h3>List of LA Restaurants</h3>
                <h4>Filter</h4>
                <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/"><Button>Home</Button></Link>
                <Restaurants restaurants={restaurants} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
    }
  }
  
export default RestaurantsContainer = connect(mapStateToProps)(RestaurantsContainer)
