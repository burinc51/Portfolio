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
            <img className="my-profile" src={"https://lh3.googleusercontent.com/a/ACg8ocJj8DbGmhFMzw8G-Os_De2cgM6fSbx6OUNLP7yXTOnzcscczD8=s288-c-no"} alt="My Profile" draggable="false" />
          </Fade>
        </div>
        <div className="aboutme col-sm-6" style={{}}>
          <Fade bottom distance="10%">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am <span style={{color:' rgb(227, 64, 95)'}}>burin Chornwaree</span> (GOT). Now studying in the fourth year of bachelor’s degree in Electronic Computer Technology at King Mongkut University of Technology North Bangkok.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have front-end development experience from an internship, 
              where I worked with <span style={{color:' rgb(227, 64, 95)'}}> TypeScript </span> ,<span style={{color:' rgb(227, 64, 95)'}}>  Tailwind CSS</span> , and <span style={{color:' rgb(227, 64, 95)'}}>  React.js </span> to build dynamic and responsive web applications. 
              While I have developed a solid foundation in front-end technologies, my true passion lies in back-end development. 
              I am eager to expand my expertise and take on full-stack challenges
            </p>
          </Fade>
        </div>
      </div>


      {/* <AboutMe theme={theme} /> */}
    </div>
  );
}
