import AboutUsMain from "../aboutLayout/aboutUsMain/AboutUsMain";
import CoreValue from "../aboutLayout/coreValue/CoreValue";
import HighlightMoment from "../aboutLayout/highlightMoment/HighlightMoment";
import "./aboutus.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutUsMain />
      <CoreValue />
      <HighlightMoment />
    </div>
  );
};

export default AboutUs;
