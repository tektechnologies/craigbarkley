import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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
          <Modal.Title>Project Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />

            <label htmlFor="companyName">Company</label>
            <input type="text" id="companyName" {...register("companyName")} />

            <label htmlFor="emailAddress">Email</label>
            <input
              type="text"
              id="emailAddress"
              {...register("emailAddress")}
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" {...register("phoneNumber")} />

            <label htmlFor="visitCompetion">
              Have you contacted another provider in the last 7 days?
            </label>
            <input
              type="checkbox"
              id="visitCompetion"
              {...register("visitCompetion")}
            />

            <hr />

            <label htmlFor="visitReason">Visit Reason</label>
            <input
              type="textarea"
              id="visitReason"
              {...register("visitReason")}
            />

            <hr />

            <label htmlFor="instructionRequired">
              Product Instruction Required?
            </label>
            <input
              type="checkbox"
              id="instructionRequired"
              {...register("instructionRequired")}
            />

            <hr />

            <label htmlFor="instructWhat">Instruction Specifics</label>
            <input
              type="textarea"
              id="instructWhat"
              {...register("instructWhat")}
            />

            <hr />

            <label htmlFor="visitDate">Visit Date</label>
            <input type="date" id="visitDate" {...register("visitDate")} />

            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" {...register("startTime")} />

            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" {...register("endTime")} />

            <label htmlFor="userLocation">Your Location</label>
            <input
              type="time"
              id="userLocation"
              {...register("userLocation")}
            />

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

            <button>Submit</button>
          </form>
          </div>
          <DevTool control={control} />
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

          <button onClick={props.handleClose} variant="secondary">
            Close
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SelectedProjectForm;
