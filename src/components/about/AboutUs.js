import AboutUsMain from "../aboutLayout/aboutUsMain/AboutUsMain";
import CoreValue from "../aboutLayout/coreValue/CoreValue";
import HighlightMoment from "../aboutLayout/highlightMoment/HighlightMoment";
import "./aboutus.scss";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-us">
      <AboutUsMain />
      <CoreValue />
      <HighlightMoment />
    </div>
  );
};

export default AboutUs;
