import React, { Component } from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody, Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addNewRestaurant } from '../actions/restaurants'
import { Redirect } from 'react-router-dom';

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            address: '',
            city: 'Los Angeles',
            category: '',
            delivery: false,
            delivery_url: '',
            latitude: null,
            longitude: null,
            redirectToPick: false
        };
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleOnChange.bind(this);
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    handleOnChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.toggle();
        this.props.addNewRestaurant(this.state);
        this.setState({redirectToPick: true})
    }

    handleDeliveryCheckbox(event) {
        if (event.target.checked) {
            this.setState({ delivery: true });
        } else {
            this.setState({ delivery: false })
        }
    }

    render() {
        if (this.state.redirectToPick) {
            return (
                <Redirect to={{
                    pathname: "/show",
                    state: {restaurant: this.state}
                }}/>
            )
        }
        return (
            <div>
                <Button color="danger" size="lg" onClick={this.toggle} style={{ marginRight: '.5rem' }}>Add New Restaurant</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody className="bg-secondary" >
                        <div>
                            <Button onClick={this.toggle} close/>
                            <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                                <FormGroup>
                                    <Label for="name">LA Restaurant Name</Label>
                                    <Input type="text" id="name" name="name" placeholder="Name"
                                        onChange={(event) => this.handleOnChange(event)} />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="address">LA Restaurant Address</Label>
                                            <Input type="text" name="address" id="address" placeholder="Address"
                                                onChange={(event) => this.handleOnChange(event)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Label for="category">LA Restaurant Category</Label>
                                        <Input type="text" name="category" id="category" placeholder="Category"
                                            onChange={(event) => this.handleOnChange(event)}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="latitude" className="float-right">LA Restaurant</Label>
                                            <Input type="text" name="latitude" id="latitude" placeholder="Latitude"
                                                onChange={(event) => this.handleOnChange(event)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                        <Label for="longitude">Map Coordinates</Label>
                                        <Input type="text" name="longitude" id="longitude" placeholder="Longitude"
                                            onChange={(event) => this.handleOnChange(event)}/>
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
                                        onChange={(event) => this.handleOnChange(event)}/>
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

export default connect(mapStateToProps, { addNewRestaurant })(ModalForm);
