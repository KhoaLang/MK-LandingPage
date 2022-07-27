import { useTranslation } from "react-i18next";
import PrimaryButton from "../../layouts/primaryButton/Button";
import "./about.scss";
import { Parallax } from "rc-scroll-anim";
const About = (props) => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <div className="about__bg"></div>
      <Parallax
        className="d-flex justify-content-center align-items-center flex-column"
        animation={[
          { x: 0, opacity: 1, playScale: [0, 0.7] },
          { blur: "10px", playScale: [0.7, 1] },
        ]}
        style={{
          transform: "translateX(-50%)",
          zIndex: "1000",
          width: "100%",
          height: "100vh",
          position: "relative",
          opacity: 0,
        }}>
        <div className="about__container container d-flex justify-content-center align-items-center flex-column">
          <h1>{t("AboutVNPLUS")}</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id non proident, sunt in
            culpa qui officia
          </p>
          <PrimaryButton path="/aboutus" style={{ margin: "70px auto" }}>
            {t("More")}
          </PrimaryButton>
        </div>
      </Parallax>
    </section>
  );
};

export default About;
