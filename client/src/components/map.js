import React from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody, Button } from "reactstrap";

class ModalMap extends React.Component {
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
          <Button color="primary" onClick={this.toggle}>View Map</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody className="bg-secondary" >
              <div>
                <Button onClick={this.toggle} close/>
                <h5>{this.props.restaurant.name}</h5>
                <iframe title="map" width="100%" height="450"
                  src={"https://www.google.com/maps/embed/v1/search?q=" +
                    this.props.restaurant.latitude + "%2C" +
                    this.props.restaurant.longitude + "&key=" +
                    process.env.REACT_APP_GOOGLE_KEY}>
                </iframe>
              </div>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default connect()(ModalMap);