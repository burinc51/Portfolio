import React, { Component } from "react";
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

export default function Main(propss) {
  return(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
      />
      {/* <Route
        path="/Education"
        element={<Education theme={propss.theme} setTheme={propss.setTheme} />}
      /> */}
    </Routes>
</BrowserRouter>
)
  
  //   return (
  //     <div>
  //       <HashRouter basename="/">
  //         <Switch>
  //           <Route
  //             path="/"
  //             exact
  //             render={(props) => (
  //               <Home
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/home"
  //             render={(props) => (
  //               <Home
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/experience"
  //             exact
  //             render={(props) => (
  //               <Experience
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/education"
  //             render={(props) => (
  //               <Education
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/contact"
  //             render={(props) => (
  //               <Contact
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //           <Route
  //             path="/projects"
  //             render={(props) => (
  //               <Projects
  //                 {...props}
  //                 theme={propss.theme}
  //                 setTheme={propss.setTheme}
  //               />
  //             )}
  //           />
  //         </Switch>
  //       </HashRouter>
  //     </div>
  //   );
  }

