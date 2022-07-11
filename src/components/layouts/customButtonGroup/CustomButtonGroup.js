import "./customButtonGroup.scss";
const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <i
        // className="bx bx-chevron-left"
        className={
          currentSlide === 0
            ? "disable bx bx-chevron-left"
            : "bx bx-chevron-left"
        }
        onClick={() => previous()}
        style={{ fontSize: "35px", color: "#1ea6fb" }}
      ></i>
      <i
        className="bx bx-chevron-right"
        style={{ fontSize: "35px", color: "#1ea6fb" }}
        onClick={() => next()}
      ></i>
    </div>
  );
};

export default CustomButtonGroup;
