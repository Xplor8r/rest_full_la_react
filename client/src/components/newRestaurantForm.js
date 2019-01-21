import React from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody, Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";


class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
          <Button color="danger" onClick={this.toggle}>Add New Restaurant</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody className="bg-secondary" >
              <div>
                <Button onClick={this.toggle} close/>
                <Form>
                    <FormGroup>
                        <Label for="name">LA Restaurant Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name"/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="address">LA Restaurant Address</Label>
                                <Input type="text" name="email" id="address" placeholder="Address" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="category">LA Restaurant Category</Label>
                            <Input type="text" name="category" id="category"/>
                            </FormGroup>
                        </Col>
                    </Row>
                     <FormGroup check>
                        <Input type="checkbox" name="delivery" id="delivery"/>
                        <Label for="delivery" check>Has Delivery</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="grubhub">Grubhub website</Label>
                        <Input type="text" name="grubhub" id="grubhub" placeholder="Grubhub"/>
                    </FormGroup>
                    <Button>Add Restaurant</Button>
                </Form>
              </div>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}



export default connect()(ModalForm);