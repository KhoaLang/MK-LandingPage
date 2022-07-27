import "./career.scss";
import Carousel from "react-multi-carousel";
import CareerCard from "../../layouts/careerCard/CareerCard";
import CustomButtonGroup from "../../layouts/customButtonGroup/CustomButtonGroup";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Parallax } from "rc-scroll-anim";

const Career = () => {
  const { t } = useTranslation();
  const arr = [
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
    {
      title: "Lead data engineer",
      info: "Manage a Data Engineer squad to implement Data Platform’s components (e.g., to collect and...)",
    },
  ];
  return (
    <section className="career scrollingAnimate">
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.0, 0.7] }}
        style={{ transform: "translateX(100px)", opacity: 0 }}>
        <h2>{t("Career")}</h2>
        <div className="career__card-slider">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            customButtonGroup={<CustomButtonGroup />}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 575,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {arr.map((item, idx) => (
              <CareerCard key={idx} title={item.title} info={item.info} />
            ))}
          </Carousel>
        </div>
      </Parallax>
    </section>
  );
};

export default Career;
