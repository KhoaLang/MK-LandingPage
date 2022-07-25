import { useTranslation } from "react-i18next";
import "./careerCard.scss";

const CareerCard = (props) => {
  const { title, info } = props;
  const { t } = useTranslation();
  return (
    <div className="career-card">
      <h4>{title}</h4>
      <p className="career-card__info">{info}</p>
      <div className="career-card__footer d-flex justify-content-between align-items-center">
        <p>1 month ago</p>
        <div className="career-card__footer__button">{t("ApplyNow")}</div>
      </div>
    </div>
  );
};

export default CareerCard;
