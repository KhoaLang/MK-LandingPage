import "./aboutUsMain.scss";
// import image from "../../../assets/aboutus.jpg";
import image from "../../../assets/about/diverse-people-joining-hands-together 1.jpg";
import { useTranslation } from "react-i18next";

const AboutUsMain = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us-main">
      {/* <h2>{t("About")}</h2> */}
      <h2>Về Smart Solution</h2>
      <h2>Chuyên thiết kế bộ nhận diện thương hiệu </h2>
      <div className="about-us-main__content">
        <p className="about-us-main__content__main__first-paragraph">
          {/* {t("AboutUs1")} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id non proident, sunt in culpa
          qui officia
        </p>
        <img src={image} alt="nothing to see" />
        <p className="about-us-main__content__main__second-paragraph">
          {/* {t("AboutUs2")} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id non proident, sunt in culpa
          qui officia
        </p>
        {/* <p className="about-us-main__content__main__third-paragraph">
          {t("AboutUs3")}
        </p> */}
      </div>
    </section>
  );
};

export default AboutUsMain;
