import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItemButton, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import { addCategoryFilter, removeCategoryFilter, addDeliveryFilter, removeDeliveryFilter } from '../actions/filters';
import { connect } from 'react-redux';

class FilterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            cSelected: [],
            rSelected: 'All'
        };           
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
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
          this.props.dispatch(addTakeoutFilter());
        } else {
          this.props.dispatch(removeTakeoutFilter());
        }
      }

      render() {
        return (
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                <div className="float-left">
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 'Has Delivery'}>Has Delivery</Button>
                    </ButtonGroup>
                    <p>{this.state.rSelected}</p>
                </div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="float-right">
                    <DropdownToggle caret>
                    Category
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header>Pick a Category</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      restaurantFilters: state.restaurantFilters,
    }
  }

export default connect(mapStateToProps)(FilterForm)

