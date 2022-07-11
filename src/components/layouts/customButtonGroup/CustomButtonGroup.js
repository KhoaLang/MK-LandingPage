import "./customButtonGroup.scss";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <LeftOutlined
        className={currentSlide === 0 && "disable bx bx-chevron-left"}
        onClick={() => previous()}
        style={{ fontSize: "25px", color: "#1ea6fb" }}
      />
      <RightOutlined
        onClick={() => next()}
        style={{ fontSize: "25px", color: "#1ea6fb" }}
      />
    </div>
  );
};

export default CustomButtonGroup;
