import React from "react";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio";


function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main container mt-2" id="experience" style={{paddingTop:'110px'}}>
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                Experience
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                Internship
              </h3>
            </div>
          </div>
        </Fade>
      </div>
      <div className="mt-5" style={{margin:'0 5%'}}>
        {experience.experience.map((degree) => {
            return (
              <DegreeCard key={degree.title} degree={degree} theme={theme} />
            );
          })}
      </div>
    </div>
  );
}

export default Experience;
