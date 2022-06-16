
import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal as="modal" show={this.props.showModal} onHide={this.props.handleOnHide}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body as="modal-body">
            <img src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.title} width="400" height="400"></img>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;