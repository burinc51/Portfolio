import React, { useState } from "react";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import Carousel from 'react-bootstrap/Carousel';
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { Modal } from 'react-bootstrap';
import img_resume from "../../assests/images/Resume.png"
import img_transcript1 from "../../assests/images/transcript_1.png"
import img_transcript2 from "../../assests/images/transcript_2.png"
import resume from "../../assests/pdf/Resume.pdf"
import transcript from "../../assests/pdf/transcript.pdf"



function Education(props) {

  const [showMd_r, setShowMd_r] = useState(false)
  const [showMd_t, setShowMd_t] = useState(false)

  const theme = props.theme;

  const showResume = async () => {
    setShowMd_r(true)
  }

  const showTranscript = async () => {
    setShowMd_t(true)
  }

  const DownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = resume;
    downloadLink.download = "Resume_บุรินทร์_จรวารี.pdf";
    downloadLink.click();
  };
  const DownloadTranscript = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = transcript;
    downloadLink.download = "transcript_บุรินทร์_จรวารี.pdf";
    downloadLink.click();
  };


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
          <Educations theme={props.theme} />
          <div className="d-flex justify-content-center ">
            <button className="btn btn-primary m-1" onClick={() => showResume()}>Resume</button>
            <button className="btn btn-primary m-1" onClick={() => showTranscript()}>Transcript</button>
          </div>
        </Fade>

      </div>

      <Modal show={showMd_r} onHide={() => setShowMd_r(false)} animation={true} className="custom-modal" dialogClassName="modal-lg">
        <Modal.Header closeButton >
          <Modal.Title >
            <span>Resume</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img_resume} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="img_resume" />
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={DownloadResume}>DOWNLOAD</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showMd_t} onHide={() => setShowMd_t(false)} animation={true} className="custom-modal" dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Transcript</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null} data-bs-theme="dark">
            <Carousel.Item>
              <img src={img_transcript1} className="d-block w-100" alt="img_transcript1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img_transcript2} className="d-block w-100" alt="img_transcript2" />
            </Carousel.Item>
          </Carousel>
          <div className="d-flex justify-content-center m-1">
            <button className="btn btn-primary" onClick={DownloadTranscript}>DOWNLOAD</button>
          </div>
        </Modal.Body>
      </Modal>

      <style>
        {`
          .custom-modal .modal-header {
            background-color: #fff;
          }

          .custom-modal .modal-title {
            color: #333;
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
