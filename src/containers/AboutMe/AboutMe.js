import React from "react";
import "./AboutMe.css";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main mt-5 container" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text, paddingTop: '100px' }}>
            About Me
          </h1>
        </Fade>
      </div>
      <div className="row">
        <div className="col-sm-6" style={{}}>
          <Fade bottom distance="10%">
            <img className="my-profile" src={"https://portfolio-tanapon-9031f.web.app/static/media/my_profile.74cc88e96e2caf9de899.jpg"} alt="My Profile" draggable="false" />
          </Fade>
        </div>
        <div className="aboutme col-sm-6" style={{}}>
          <Fade bottom distance="10%">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am <span style={{color:' rgb(227, 64, 95)'}}>burin Chornwaree</span> (GOT). Now studying in the fourth year of bachelor’s degree in Electronic Computer Technology at King Mongkut University of Technology North Bangkok.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I can learn quickly and I am interested in <span style={{color:' rgb(227, 64, 95)'}}>Cloud computing</span>, <span style={{color:' rgb(227, 64, 95)'}}>Backend Frontend</span>, 
              <span style={{color:' rgb(227, 64, 95)'}}>Web and Mobile Developer</span>, 
              <span style={{color:' rgb(227, 64, 95)'}}>Full-stack Developer</span>,
              Now I'm preparing to find an internship.
            </p>
          </Fade>
        </div>
      </div>


      {/* <AboutMe theme={theme} /> */}
    </div>
  );
}
