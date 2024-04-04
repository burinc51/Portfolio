import React from "react";
import Image from "../../assests/images/imageSvg.png"

export default function SkillImage(props) {
  return (
   <div className="d-flex justify-content-end">
      <img src={Image} alt="My SVG" className="skillImage"/>
   </div>
  );
}
