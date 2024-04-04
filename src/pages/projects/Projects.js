import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main container" style={{paddingTop:'110px'}} id="projects">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main" >
        {projects.data.map((repo) => {
          return <ProjectCard project={repo} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
