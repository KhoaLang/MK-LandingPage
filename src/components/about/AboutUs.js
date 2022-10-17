import AboutUsMain from "../aboutLayout/aboutUsMain/AboutUsMain";
import CoreValue from "../aboutLayout/coreValue/CoreValue";
import "./aboutus.scss";
import { useEffect } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const AboutUs = () => {
  return (
    <div className="about-us">
      <SmoothScroll />
      <AboutUsMain />
      <CoreValue />
    </div>
  );
};

export default AboutUs;
