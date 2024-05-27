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
        </Modal.Header>

        <Modal.Body>

        <form>
          
        </form>
        {/* firstName
        lastName
        company
        email
        phone number
        Have you visited a foreign country in the last 7 days (yes/no)
        <hr>
        vitsitReason - text box big
        <hr>
        toolsRequired (yes/no)
        Reason for tools text box big
        <hr>
        Visit details calendar 
        Start time
        End time
        Your Location
        Category
        <p>No cell phones</p>
        signature box */}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SelectedProjectForm;
