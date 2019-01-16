import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';
import { addCategoryFilter, removeCategoryFilter, addDeliveryFilter, removeDeliveryFilter } from '../actions/filters';
import { connect } from 'react-redux';

class FilterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            cSelected: []
        };           
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleCategoryFilter(e) {
        let category = e.target.value
        if (e.target.checked) {
            this.props.dispatch(addCategoryFilter(category));
        } else {
            this.props.dispatch(removeCategoryFilter(category));
        }
    }

    handleDeliveryFilter(e) {
        if (e.target.value) {
             this.props.dispatch(addDeliveryFilter());
        } else {
            this.props.dispatch(removeDeliveryFilter());
        }
    }

      render() {
        let dropDownItems = this.props.restaurantData.map((restaurant) => {
            return <DropdownItem onClick={(e) => this.handleCategoryFilter(e)}>{restaurant.categories.map(cat => cat.name)[0]}</DropdownItem>
       })
        return (
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                    <ButtonGroup className="float-left">
                        <Button color="primary" onClick={(e) => this.handleDeliveryFilter(e)}>Has Delivery</Button>
                    </ButtonGroup>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary" className="float-right">
                    <DropdownToggle caret>Category</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Pick a Category</DropdownItem>
                        {dropDownItems}
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData,
        restaurantFilters: state.restaurantFilters,
    }
}

export default connect(mapStateToProps)(FilterForm)

