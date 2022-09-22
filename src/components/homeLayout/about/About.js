import { useTranslation } from "react-i18next";
import PrimaryButton from "../../layouts/primaryButton/Button";
import "./about.scss";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about d-flex justify-content-center align-items-center">
      <div className="about__bg"></div>
      <div className="about__container container d-flex justify-content-center align-items-center flex-column">
        <h1>{t("AboutVNPLUS")}</h1>
        <p style={{ textAlign: "justify" }}>
          {t("AboutUs1")} {t("AboutUs2")} {t("AboutUs3")}
        </p>
        <PrimaryButton path="/aboutus" style={{ margin: "70px auto" }}>
          {t("More")}
        </PrimaryButton>
      </div>
    </section>
  );
};

export default About;
