import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';
import { addCategoryFilter, removeCategoryFilter, addDeliveryFilter, removeDeliveryFilter } from '../actions/filters';
import { connect } from 'react-redux';


class FilterForm extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropDownValue: 'Select Category',
            dropdownOpen: false
        };
    }

    resetCategory(e) {
        let category = e.currentTarget.textContent
        this.setState({dropDownValue: 'Select action'});
        this.props.dispatch(removeCategoryFilter(category));
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleCategoryFilter(e) {
        this.setState({dropDownValue: e.currentTarget.textContent});
        console.log(e.target === e.currentTarget)
        let category = e.currentTarget.textContent
        if (e.target === e.currentTarget) {
            this.props.dispatch(addCategoryFilter(category));
        } else {
            this.props.dispatch(removeCategoryFilter(category));
        }
    }

    handleDeliveryFilter(e) {
        console.log(e.target)
        if (e.target.checked) {
             this.props.dispatch(addDeliveryFilter());
        } else {
            this.props.dispatch(removeDeliveryFilter());
        }
    }

    render() {
        let categories = this.props.restaurantData.map((restaurant) => {return restaurant.categories.map(cat => cat.name)[0]})
        let uniqueCategories = [...new Set(categories)]
        let dropDownItems = uniqueCategories.map((category) => {
            return <DropdownItem value="" key={category} onClick={(e) => this.handleCategoryFilter(e)}>{category}</DropdownItem>
        })

        return (
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                    <ButtonGroup className="float-left">
                        <Button color="primary" onClick={(e) => this.handleDeliveryFilter(e)}>Has Delivery</Button>
                    </ButtonGroup>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary" className="float-right">
                    <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Pick a Category</DropdownItem>
                        <DropdownItem onClick={(e) => this.resetCategory(e)}>All</DropdownItem>
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

export const Filter = connect(mapStateToProps)(FilterForm)

