import "./highlightMoment.scss";
import Carousel from "react-multi-carousel";
import img1 from "../../../assets/Frame38.png";

const HighlightMoment = () => {
  return (
    <section className="highlight-moment">
      <h2>Highlight moments</h2>
      <div className="highlight-moment__carousel-container d-flex justify-content-center align-items-center">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="highlight-moment__carousel-container__carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img src={img1} alt="nothing to see" />
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightMoment;
