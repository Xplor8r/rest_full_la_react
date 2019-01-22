import React, { Component } from 'react';
import { Button, Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
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
        let filteredByCategoryRestaurants = restaurants.filter((restaurant) => restaurant.category === filter.categoryFilter[0]);
        return filteredByCategoryRestaurants.filter((restaurant) => restaurant.delivery);
    //matches category
    } else if (filter.categoryFilter.length !== 0 && filter.deliveryFilter === false) {
        return restaurants.filter((restaurant) => restaurant.category === filter.categoryFilter[0]);
    } else if (filter.categoryFilter.length === 0 && filter.deliveryFilter === false) {
        return restaurants;
    } else { return restaurants }
}
   
export class RestaurantsContainer extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        let restaurants = getRestaurants(this.props.restaurantData, this.props.filter)
        return (
            <Container>
                <Navbar light expand="md" className="justify-content-sm-center">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <Filter />
                    <ModalForm />

                    <NavItem>
                        <Link to="/pick"><Button style={{ marginRight: '.5rem' }} size="lg" color="danger" >Get a Random Pick</Button></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/hungry"><Button size="lg" color="danger">Go Back</Button></Link>
                    </NavItem>
                    </Nav>
                    </Collapse>
                    
                    </Navbar>
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
