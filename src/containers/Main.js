import React from "react";
import { Route,Routes,BrowserRouter,Navigate} from "react-router-dom";
import Home from "../pages/home/HomeComponent";

export default function Main(propss) {
  return(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
      />
      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
</BrowserRouter>
)
  }

