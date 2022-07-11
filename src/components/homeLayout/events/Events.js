import "./events.scss";
import { Row, Col } from "antd";
//Import Image
import image1 from "../../../assets/Rectangle138.png";
import image2 from "../../../assets/Rectangle138(1).png";
import image3 from "../../../assets/Rectangle138(2).png";
import Card from "../../layouts/card/Card";
import PrimaryButton from "../../layouts/primaryButton/Button";
import { useEffect } from "react";

const Events = () => {
  const cardImage = [image1, image2, image3];

  return (
    <section className="events d-flex justify-content-center align-items-center">
      <div className="events__container container d-flex justify-content-center align-items-center flex-column">
        <h2>Tin tức - sự kiện</h2>
        <Row gutter={[48, 48]}>
          {cardImage.map((item, idx) => (
            <Col key={idx} md={8} xs={24}>
              <Card image={item} />
            </Col>
          ))}
        </Row>
        <PrimaryButton path="/event" style={{ margin: "67px auto" }}>
          Xem thêm
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Events;
