import React, { Component } from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody, Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addNewRestaurant, fetchRestaurantData } from '../actions/restaurants'
import { endDataFetch } from '../actions/dataFetch'

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        name: '',
        address: '',
        city: '',
        category: '',
        delivery: false,
        delivery_url: '',
        latitude: null,
        longitude: null
    };

    this.toggle = this.toggle.bind(this);
  }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    handleOnChange(event){
        const input = event.target.name
        const state = this.state
        state[input] = event.target.value
        this.setState(state)

    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addNewRestaurant(this.state);
        this.setState({
            modal: false,
            name: '',
            address: '',
            city: '',
            category: '',
            delivery: false,
            delivery_url: '',
            latitude: null,
            longitude: null
        });
        console.log(this.state)
        this.props.fetchRestaurantData()
    }

    handleDeliveryCheckbox(event) {
        if (event.target.checked) {
            this.setState({ delivery: true });
        } else {
            this.setState({ delivery: false })
        }
    }

  render() {
    return (
      <div>
          <Button color="danger" onClick={this.toggle}>Add New Restaurant</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody className="bg-secondary" >
              <div>
                <Button onClick={this.toggle} close/>
                <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <FormGroup>
                        <Label for="name">LA Restaurant Name</Label>
                        <Input type="text" id="name" placeholder="Name"
                        name={this.state.name} onChange={(event) => this.handleOnChange(event)} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="address">LA Restaurant Address</Label>
                                <Input type="text" name="address" id="address" placeholder="Address"
                                address={this.state.address} onChange={(event) => this.handleOnChange(event)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="category">LA Restaurant Category</Label>
                            <Input type="text" name="category" id="category" placeholder="Category"
                            category={this.state.category} onChange={(event) => this.handleOnChange(event)}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="latitude">LA Restaurant</Label>
                                <Input type="text" name="email" id="latitude" placeholder="Latitude"
                                latitude={this.state.latitude} onChange={(event) => this.handleOnChange(event)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="longitude">Map Cordinates</Label>
                            <Input type="text" name="longitude" id="longitude" placeholder="Longitude"
                            longitude={this.state.longitude} onChange={(event) => this.handleOnChange(event)}/>
                            </FormGroup>
                        </Col>
                    </Row>
                     <FormGroup check>
                        <Input type="checkbox" name="delivery" id="delivery"/>
                        <Label for="delivery" check>Has Delivery</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="delivery_url">Grubhub Website</Label>
                        <Input type="text" name="delivery_url" id="delivery_url" placeholder="Grubhub"
                        delivery_url={this.state.delivery_url} onChange={(event) => this.handleOnChange(event)}/>
                    </FormGroup>
                    <Button type="submit">Add Restaurant</Button>
                </Form>
              </div>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewRestaurant: () => dispatch(addNewRestaurant()),
        fetchRestaurantData: () => dispatch(fetchRestaurantData()),
        endDataFetch: () => dispatch(endDataFetch())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);