import { Row, Col } from "antd";
import "./otherNews.scss";
import img1 from "../../../assets/Frame 54 (4).png";
import img2 from "../../../assets/Frame 54 (5).png";
import img3 from "../../../assets/Frame 54 (6).png";

const articles = [img1, img2, img3];

const OtherNews = () => {
  return (
    <section className="other-news">
      <h3>Tin tức khác</h3>
      <Row gutter={[28, 28]}>
        {articles.map((item, idx) => (
          <Col md={8} key={idx}>
            <div className="other-news__card">
              <img src={item} alt="" />
              <div className="other-news__card__content">
                <p>Category 1</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <p>28/6/2022</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default OtherNews;
