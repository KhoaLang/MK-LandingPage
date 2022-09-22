import "./aboutUsMain.scss";
import image from "../../../assets/aboutus.jpg";
import { useTranslation } from "react-i18next";

const AboutUsMain = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us-main d-flex flex-column align-items-center">
      <h2>{t("About")}</h2>
      <div className="about-us-main__content">
        <img src={image} alt="nothing to see" />
        <p className="about-us-main__content__main__first-paragraph">
          {t("AboutUs1")}
        </p>
        <p className="about-us-main__content__main__second-paragraph">
          {t("AboutUs2")}
        </p>
        <p className="about-us-main__content__main__third-paragraph">
          {t("AboutUs3")}
        </p>
      </div>
    </section>
  );
};

export default AboutUsMain;
