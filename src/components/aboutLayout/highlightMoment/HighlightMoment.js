import "./highlightMoment.scss";
import Carousel from "react-multi-carousel";
import img1 from "../../../assets/Frame38.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMomentAction } from "../../../stores/actions/momentAction";
import { URL_IMAGE } from "../../../utils/constants";

const HighlightMoment = () => {
  const dispatch = useDispatch();
  const { listMoment } = useSelector((state) => state.momentReducer);
  console.log(listMoment);
  useEffect(() => {
    dispatch(getAllMomentAction);
  });
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
          {listMoment?.map((img, idx) => {
            console.log(`${URL_IMAGE}${img.image[0]}`)
            return (
              <img
                src={`${URL_IMAGE}${img.image[0]}`}
                key={img.id}
                alt="nothing to see"
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default HighlightMoment;
