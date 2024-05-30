import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// type FormValues = {
//   firstName : string,
//   lastName : string,
//   companyName : string,
//   emailAddress : string,
//   phoneNumber : string,
//   visitCompetion : string,
//   visitReason : string,
//   instructionRequired : string,
//   instructWhat : string,
//   visitDate : string,
//   startTime : string,
//   endTime : string,
//   userLocation : string,
//   productcategory : string,
// };

const SelectedProjectForm = (props) => {
  console.log("props in form comp: ", props);

  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("Form Submitted!", data);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className="form-modal"
      size="xl"
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Vistor Request Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="grid-container">
            <div className="form-container">
              <h2>Personal Details</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="label-input-group three-col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                  />
                </div>
                <div className="label-input-group three-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" {...register("lastName")} />
                </div>
                <div className="label-input-group three-col">
                  <label htmlFor="companyName">Company</label>
                  <input
                    type="text"
                    id="companyName"
                    {...register("companyName")}
                  />
                </div>
                <div className="label-input-group">
                  <label htmlFor="emailAddress">Email</label>
                  <input
                    type="text"
                    id="emailAddress"
                    {...register("emailAddress")}
                  />
                </div>
                <div className="label-input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                  />
                </div>
                <label htmlFor="visitForeignCountry" className="toggle">
                  Have you visited a foreign country in the last 7 days?
                  <input
                    type="checkbox"
                    id="visitForeignCountry"
                    {...register("visitForeignCountry")}
                  />
                  <span className="slider position-toggle"></span>
                </label>
                <hr
                  style={{
                    width: "100%",
                    color: "grey",
                    border: "1px solid grey",
                  }}
                />

                <div className="label-textarea-group">
                  <h2>Visit Reason</h2>

                  <label htmlFor="visitReason">Reason for Visit</label>
                  {/* <input
                    type="textarea"
                    id="visitReason"
                    {...register("visitReason")}
                  /> */}
                  <textarea
                    htmlFor="visitReason"
                    id="visitReason"
                    rows="4"
                    {...register("visitReason")}
                  ></textarea>
                </div>
                <hr
                  style={{
                    width: "100%",
                    color: "grey",
                    border: "1px solid grey",
                  }}
                />

                <div className="label-input-group">
                  <h2>Tools Details</h2>
                  <label htmlFor="toolsRequired" className="toggle">
                    Tools Required
                    <input
                      type="checkbox"
                      id="toolsRequired"
                      {...register("toolsRequired")}
                    />
                    <span className="slider position-toggle"></span>
                  </label>
                </div>

                <div className="label-textarea-group">
                  <label htmlFor="visitReason">Reason for Tools</label>
                  {/* <input
                type="textarea"
                id="toolReason"
                {...register("toolReason")}
              /> */}
                  <textarea
                    htmlFor="toolReason"
                    id="toolReason"
                    rows="4"
                    {...register("toolReason")}
                  ></textarea>
                </div>

                <hr
                  style={{
                    width: "100%",
                    color: "grey",
                    border: "1px solid grey",
                  }}
                />

                <div className="h2-blocklevel">
                  <h2>Visit Details</h2>
                </div>
                <div className="label-input-group three-col">
                  <label htmlFor="visitDate">Visit Date</label>
                  <input
                    type="date"
                    id="visitDate"
                    {...register("visitDate")}
                  />
                </div>

                <div className="label-input-group three-col">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    type="time"
                    id="startTime"
                    {...register("startTime")}
                  />
                </div>

                <div className="label-input-group three-col">
                  <label htmlFor="endTime">End Time</label>
                  <input type="time" id="endTime" {...register("endTime")} />
                </div>

                <div className="label-input-group">
                  <label htmlFor="userLocation">Your Location</label>
                  <input
                    type="time"
                    id="userLocation"
                    {...register("userLocation")}
                  />
                </div>
                <div className="label-input-group">
                  <label htmlFor="productcategory">Category</label>
                  <select
                    id="category"
                    defaultValue={"DEFAULT"}
                    {...register("productcategory")}
                  >
                    <option value="DEFAULT" disabled>
                      Choose Project
                    </option>
                    <option value="webSite">Web Site</option>
                    <option value="seo">Digital Marketing</option>
                    <option value="onlineStore">Online Store</option>
                    <option value="logoBranding">Logo Graphics Branding</option>
                  </select>
                </div>
                <hr
                  style={{
                    width: "100%",
                    color: "grey",
                    border: "1px solid grey",
                  }}
                />

                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  style={{ height: "40px", color: "#E75B29" }}
                />
                <h2 className="color-alert">ELECTRONIC DEVICES</h2>

                <p>
                  No cell phones, cameras, audio or visual equipment, or any
                  other electronic devices are permitted on the premises without
                  written approval by Door Access System. By signing this
                  statement, you declare that you have no electronic devices
                  including those mentioned above on your person, and you have
                  no intention of bringing such devices onto the premises
                  without prior written approval
                </p>
                <button className="next-button">Next</button>
              </form>
            </div>
          </div>
          <DevTool control={control} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.handleClose} variant="secondary">
            Close
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SelectedProjectForm;
