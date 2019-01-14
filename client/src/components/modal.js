import React from "react";
// import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Modal, ModalBody, Button } from "reactstrap";
// import Frame from "react-frame-component";

// const ModalTrigger = () => <Button>View Map</Button>;
const Map = () => {
  return (
    <div className="c-modal__body">
        <h5>Map</h5>
        <iframe title="map" width="100%" height="450" src="https://www.google.com/maps/embed/v1/search?q=34.0544%2C-118.2673&key=AIzaSyDCdMcPlWPWzlJP2Nd9hwlM1aH6vr_48r4"></iframe>
    </div>
  );
}

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
          <Button onClick={this.toggle}>View Map</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <Map />
            </ModalBody>
          </Modal>
      </div>
    );
  }
}



export default connect()(ModalMap);