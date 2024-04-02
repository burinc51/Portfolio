import React, { useState } from "react";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { Modal } from 'react-bootstrap';

function Education(props) {
  const [showModal, setShowModal] = useState(false)
  const theme = props.theme;

  const show = async () => {
    setShowModal(true)
  }
  return (
    <div className="education-main container" style={{ paddingTop: '110px' }} id="education">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification
              </h3>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <div className="d-flex justify-content-center ">
          <button className="btn btn-primary m-1" onClick={() => show()}>Resume</button>
          <button className="btn btn-primary m-1" onClick={() => show()}>Transcript</button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} animation={true} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p>languages  S setShowModal about className</p>
          </div>
        </Modal.Body>
      </Modal>

      <style>
        {`
          .custom-modal .modal-content {
            background-color: lightblue;
          }

          .custom-modal .modal-header {
            background-color: #fff;
          }

          .custom-modal .modal-title {
            color: #333;
          }

          .custom-modal .modal-body {
            color: #000;
          }

          .custom-modal .modal-footer {
            background-color: #fff;
          }

          body.modal-open {
            overflow: hidden;
          }

         
        `}
      </style>
    </div>
  );
}

export default Education;
