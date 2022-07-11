import "./otherService.scss";
import { Row, Col } from "antd";
import img1 from "../../../assets/Frame22(1).png";
import img2 from "../../../assets/Frame22(2).png";
import img3 from "../../../assets/Frame22(3).png";
import Button from "../../layouts/primaryButton/Button";

const image = [img1, img2, img3];

const OtherService = () => {
  return (
    <section className="other-service d-flex justify-content-center align-items-center">
      <div className="other-service__container container d-flex flex-column justify-content-center align-items-center">
        <h2>Các dịch vụ khác</h2>
        <Row>
          {image.map((item, idx) => (
            <Col key={idx} md={8} xs={24}>
              <div className="other-service__container__col">
                <div className="other-service__container__col__title d-flex justify-content-between align-items-center">
                  <img src={item} alt="nothing to see" />
                  <p>Sed ut aliquip unde omnis</p>
                </div>
                <p className="other-service__container__col__content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <Button style={{ marginTop: "70px" }}>Liên hệ VNPLUS</Button>
      </div>
    </section>
  );
};

export default OtherService;
