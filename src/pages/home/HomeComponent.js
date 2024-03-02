import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import About from "../../containers/AboutMe/AboutMe";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Contact from "../contact/ContactComponent";
import Projects from "../projects/Projects";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} /> 
      <About theme={props.theme} />
      <Education theme={props.theme} setTheme={props.setTheme}/>
      <Experience theme={props.theme} setTheme={props.setTheme}/>
      <Projects theme={props.theme} setTheme={props.setTheme}/>
      {/* <Footer theme={props.theme} /> */}
    </div>
  );
}

export default Home;
