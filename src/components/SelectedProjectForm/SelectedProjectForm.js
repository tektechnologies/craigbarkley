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
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <label htmlFor="companyName">Company</label>
            <input type="text" id="companyName" name="companyName" />
            <label htmlFor="emailAddress">Email</label>
            <input type="text" id="emailAddress" name="emailAddress" />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" />
            <label htmlFor="visitForeign">
              Have you visited a foreign country in the last 7 days
            </label>
            <input type="checkbox" id="visitForeign" name="visitForeign" />
            <hr />
            <label htmlFor="visitForeign">Visit Reason</label>
            <input
              type="textarea"
              rows="4"
              cols="50"
              id="visitForeign"
              name="visitForeign"
            />
            <hr />
            <label htmlFor="toolsRequired">Tools Required?</label>
            <input type="checkbox" id="toolsRequired" name="toolsRequired" />
            <hr />
            <label htmlFor="toolReasons">Reasons For Tooling</label>
            <input type="textarea" id="toolReasoned" name="toolReasoned" />
            <hr />
            <label htmlFor="visitDate">Visit Date</label>
            <input type="date" id="visitDate" name="visitDate" />
            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" />
            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" />
            <label htmlFor="userLocation">Your Location</label>
            <input type="time" id="userLocation" name="userLocation" />
            <label for="category">Category</label>

            <select name="category" id="category">
              <option selected disabled>
                Choose Project
              </option>
              <option value="webSite">Web Site</option>
              <option value="seo">Digital Marketing</option>
              <option value="onlineStore">Online Store</option>
              <option value="logoBranding">Logo Graphics Branding</option>
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            The content and design of this website are provided for
            informational purposes only and are created by a professional web
            designer. While every effort is made to ensure the accuracy and
            quality of the information and design elements, the website designer
            makes no guarantees, representations, or warranties regarding the
            currentness, completeness, or suitability of the content for any
            specific purpose.
          </p>
          <Button onClick={props.handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SelectedProjectForm;
