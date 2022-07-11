import "./coreValue.scss";
import img1 from "../../../assets/Frame22(1).png";
import img2 from "../../../assets/Frame22(2).png";
import img3 from "../../../assets/Frame22(3).png";
import { Row, Col } from "antd";

const items = [
  {
    title: "Sed ut aliquip",
    image: img1,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Sed ut aliquip",
    image: img2,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Sed ut aliquip",
    image: img3,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Sed ut aliquip",
    image: img1,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const CoreValue = () => {
  return (
    <section className="core-value d-flex justify-content-center align-items-center">
      <div className="core-value__container container d-flex flex-column justify-content-center align-items-center">
        <h2>Giá trị cốt lõi</h2>
        <Row className="core-value__container__list">
          {items.map((item, idx) => (
            <Col
              md={6}
              xs={24}
              className="d-flex flex-column justify-content-center align-items-center"
              key={idx}
            >
              <img src={item.image} alt="nothing to see" />
              <p className="core-value__container__list__item__title">
                {item.title}
              </p>
              <p className="core-value__container__list__item__value">
                {item.info}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CoreValue;
