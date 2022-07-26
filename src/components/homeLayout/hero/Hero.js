import "./hero.scss";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero d-flex justify-content-center align-items-center">
      <div className="hero__container">
        <h1>{t("HeroQuote")}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odio
          quo eveniet voluptatum aspernatur deleniti quisquam blanditiis
        </p>
      </div>
    </section>
  );
};

export default Hero;
