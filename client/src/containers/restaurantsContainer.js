import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurants from '../components/restaurants';


export class RestaurantsContainer extends Component {
    render() {
        var restaurants = this.props.restaurantData.map((restaurant) => {
             return restaurant
        })
        return (
            <Col className="text-center">
                <h3>List of LA Restaurants</h3>
                <h4>Filter</h4>              
                <Link to="/pick"><Button>Get a Random Pick</Button></Link>  <Link to="/"><Button>Home</Button></Link>
                <Row className="h-250px">         
                    <Restaurants restaurants={restaurants} />              
                </Row>                          
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
    }
  }
  
export default RestaurantsContainer = connect(mapStateToProps)(RestaurantsContainer)
