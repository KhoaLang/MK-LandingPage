import "./coreValue.scss";
import { ReactComponent as Law } from "../../../assets/about/law 1.svg";
import { ReactComponent as Love } from "../../../assets/about/love 1.svg";
import { ReactComponent as Search } from "../../../assets/about/search 1.svg";
import { ReactComponent as Secure } from "../../../assets/about/secure 1.svg";

import { Col, Row } from "antd";

const CoreValue = () => {
  const items = [
    {
      title: "Phụng sự",
      image: <Love />,
      info: "Chúng tôi thực thi nhiệm vụ trên tinh thần phụng sự lợi ích chung của hệ sinh thái, vì nhận thức được sự cộng hưởng và ảnh hưởng lẫn nhau của từng cá thể.",
    },
    {
      title: "Sự thật",
      image: <Search />,
      info: "Chúng tôi giữ vững lòng tôn trọng các giá trị xuất phát từ sự thật.",
    },
    {
      title: "Minh bạch",
      image: <Secure />,
      info: "Chúng tôi lấy cơ sở minh bạch làm trọng. Niềm tin giữa người và người sẽ được tạo dựng khi mọi sự minh bạch và rõ ràng.",
    },
    {
      title: "Công bằng",
      image: <Law />,
      info: "Chúng tôi liên tục nuôi dưỡng sự công bằng vì đó nền tảng của văn minh.",
    },
  ];
  return (
    <section className="core-value d-flex justify-content-center align-items-center">
      <div className="core-value__container container d-flex flex-column justify-content-center align-items-center">
        <h2>Giá trị cốt lõi</h2>
        <Row gutter={[72, 48]} className="core-value__container__list">
          {items.map((item, idx) => (
            <Col
              md={6}
              xs={24}
              className="d-flex flex-column justify-content-center align-items-center"
              key={idx}
            >
              <div className="core-value__container__list__img d-flex justify-content-center align-items-center">
                {item.image}
              </div>
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
