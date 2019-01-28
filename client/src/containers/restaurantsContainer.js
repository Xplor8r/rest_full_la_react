import React, { Component } from 'react';
import { Button, Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, Media } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Restaurants from '../components/restaurants';
import Filter from '../components/filterForm';
import NoDelivery from '../components/noDelivery';
import ModalForm from '../components/newRestaurantForm';
import logo from '../images/spinning_plate.png'

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
   
class RestaurantsContainer extends Component {
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
                    <NavbarBrand><Media src={logo} className="App-logo" alt="logo" style={{ height: 50}}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Filter />
                            <ModalForm />

                            <NavItem>
                                <Link to={`/pick/${this.props.pick.restaurant.id}`}><Button size="lg" color="danger" style={{ marginRight: '.5rem' }}>Get a Random Pick</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/hungry"><Button size="lg" color="danger">Back</Button></Link>
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
        filter: state.filter,
        pick: state.pick
    }
  }
  
export default connect(mapStateToProps)(RestaurantsContainer)
