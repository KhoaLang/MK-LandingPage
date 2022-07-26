import "./events.scss";
import { Row, Col } from "antd";
//Import Image
import image1 from "../../../assets/Rectangle138.png";
import image2 from "../../../assets/Rectangle138(1).png";
import image3 from "../../../assets/Rectangle138(2).png";
import Card from "../../layouts/card/Card";
import PrimaryButton from "../../layouts/primaryButton/Button";
import { useTranslation } from "react-i18next";

const Events = () => {
  const cardImage = [image1, image2, image3];
  const { t } = useTranslation();
  return (
    <section className="events d-flex justify-content-center align-items-center">
      <div className="events__container container d-flex justify-content-center align-items-center flex-column">
        <h2>{t("New_Event")}</h2>
        <Row gutter={[48, 48]}>
          {cardImage.map((item, idx) => (
            <Col key={idx} md={8} xs={24}>
              <Card image={item} />
            </Col>
          ))}
        </Row>
        <PrimaryButton path="/event" style={{ margin: "67px auto" }}>
          {t("More")}
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Events;
