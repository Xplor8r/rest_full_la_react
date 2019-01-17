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
            dropdownOpen: false,
            cSelected: []
        };
    }

    resetCategory(e) {
        let category = e.currentTarget.textContent
        this.setState({dropDownValue: 'Select Category'});
        this.props.dispatch(removeCategoryFilter(category));
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handleCategoryFilter(e) {
        this.setState({dropDownValue: e.currentTarget.textContent});
        let category = e.currentTarget.value
        this.props.dispatch(removeCategoryFilter(category));
        this.props.dispatch(addCategoryFilter(category));
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
          this.props.dispatch(addDeliveryFilter());
        } else {
          this.state.cSelected.splice(index, 1);
          this.props.dispatch(removeDeliveryFilter());
        }
        this.setState({ cSelected: [...this.state.cSelected] });
    }

    render() {
        let categories = this.props.restaurantData.map((restaurant) => {return restaurant.categories.map(cat => cat.name)[0]})
        let uniqueCategories = [...new Set(categories.sort())]
        let dropDownItems = uniqueCategories.map((category) => {
            return <DropdownItem value={category} key={category} onClick={(e) => this.handleCategoryFilter(e)}>{category}</DropdownItem>
        })

        return (
            <div>
                <ButtonGroup className="float-left">
                    <Button onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Has Delivery</Button>
                </ButtonGroup>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary" className="float-right">
                    <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
                    <DropdownMenu right>
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

