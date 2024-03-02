import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio";


function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main container" id="experience" style={{padding:'110px'}}>
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
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      {experience.experience.map((degree) => {
          return (
            <DegreeCard key={degree.title} degree={degree} theme={theme} />
          );
        })}
      {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
    </div>
  );
}

export default Experience;
