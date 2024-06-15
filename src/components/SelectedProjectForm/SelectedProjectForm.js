import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


const SelectedProjectForm = (props) => {

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
          <Modal.Title>Project Request Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="grid-container">
            <div className="form-container">
              <h2>Discovery Details</h2>
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
                <label htmlFor="projectQuestion" className="toggle">
                  Have you started another project in the last 7 days?
                  <input
                    type="checkbox"
                    id="projectQuestion"
                    {...register("projectQuestion")}
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
                  <h2>Project Reason</h2>

                  <label htmlFor="projectReason">Reason for Project</label>
                  {/* <input
                    type="textarea"
                    id="projectReason"
                    {...register("projectReason")}
                  /> */}
                  <textarea
                    htmlFor="projectReason"
                    id="visitReason"
                    rows="4"
                    {...register("projectReason")}
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
                  <h2>Project Details</h2>
                  <label htmlFor="projectDetails" className="toggle">
                   Are you a business?
                    <input
                      type="checkbox"
                      id="projectDetails"
                      {...register("projectDetails")}
                    />
                    <span className="slider position-toggle"></span>
                  </label>
                </div>

                <div className="label-textarea-group">
                  <label htmlFor="projectSuccess">What does sucesss look like for this project?</label>
                  {/* <input
                type="textarea"
                id="projectSuccessn"
                {...register("projectSuccess")}
              /> */}
                  <textarea
                    id="projectSuccess"
                    rows="4"
                    {...register("projectSuccess")}
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
                  <h2>Project Specifics</h2>
                </div>
                <div className="label-input-group three-col">
                  <label htmlFor="projectDate">Project End Date</label>
                  <input
                    type="date"
                    id="projectDate"
                    {...register("projectDate")}
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
                  <label htmlFor="productcategory">Offerings</label>
                  <select
                    id="category"
                    defaultValue={"DEFAULT"}
                    {...register("productcategory")}
                  >
                    {/* <option value="DEFAULT" disabled>
                      Select User
                    </option> */}
                    <option value="website">Website</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="online-store">Online Store</option>
                    <option value="cameras">Home Cameras</option>
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
                  style={{ height: "40px", color: "rgb(203,108,181)" }}
                />
                <h2 className="color-alert">ELECTRONIC DEVICES</h2>

                <h1 style={{ height: "40px", color: "rgb(203,108,181)" }}>
                Lets build  TEK!
                </h1>
               
                <button className="next-button">Submit</button>
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
