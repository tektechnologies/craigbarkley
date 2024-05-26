import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SelectedProjectForm = (props) => {
  console.log("props in form comp: ", props);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Project Form</Modal.Title>
          <Button onClick={props.handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Header>

        <Modal.Body></Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default SelectedProjectForm;
