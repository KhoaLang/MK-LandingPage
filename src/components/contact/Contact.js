import "./contact.scss";
import { Row, Col, Form, Input, Modal } from "antd";
import Button from "../layouts/primaryButton/Button";
import { ReactComponent as Location } from "../../assets/locationLogo.svg";
import { ReactComponent as Phone } from "../../assets/phoneLogo.svg";
import { ReactComponent as Email } from "../../assets/mail.svg";
import img1 from "../../assets/Frame 66.png";
import { useEffect, useState } from "react";

const contactInfo = [
  {
    logo: <Location />,
    info: "795 Folsom Ave, Suite 600 San Francisco, CA 94107",
  },
  {
    logo: <Phone />,
    info: "0938 737 999",
  },
  {
    logo: <Email />,
    info: "contact@vnplus.vn",
  },
];

const Contact = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section className="contact d-flex justify-content-center align-items-center">
      <div className="contact__container container d-flex flex-column justify-content-center align-items-center">
        <h2>Liên hệ với VNPLUS</h2>
        <div className="contact__container__form">
          <Row gutter={[48]}>
            <Col md={14} xs={24}>
              <Form
                form={form}
                labelCol={{
                  span: 16,
                }}
                wrapperCol={{
                  span: 24,
                }}
                layout="vertical">
                <Row gutter={[24, 24]}>
                  <Col md={12} xs={24}>
                    <Form.Item
                      label="Họ và tên"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập họ và tên!",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col md={12} xs={24}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập email!",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col md={12} xs={24}>
                    <Form.Item
                      label="Tên doanh nghiệp"
                      name="enterprisename"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên công ty!",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col md={12} xs={24}>
                    <Form.Item
                      label="Số điện thoại"
                      name="phonenumber"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập số điện thoại!",
                        },
                      ]}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Chúng tôi có thể giúp gì cho bạn?"
                  name="help"
                  rules={[
                    {
                      required: true,
                      message: "Bạn thắc mắc điều gì?",
                    },
                  ]}>
                  <Input.TextArea />
                </Form.Item>
                <Button style={{ marginTop: "26px" }}>Gửi</Button>
              </Form>
            </Col>
            <Col md={10} xs={24}>
              <div className="contact__container__form__company-info d-flex flex-column">
                <h5>Công ty Cổ phần Công nghệ và Đầu tư VNPLUS</h5>
                <ul className="footer__upper__container__left-side__contact-info">
                  {contactInfo.map((item, idx) => (
                    <li
                      className="footer__upper__container__left-side__contact-info__item d-flex align-items-center"
                      key={idx}>
                      {item.logo}
                      <p style={{ color: "#000" }}>{item.info}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact__container__form__map">
                <img src={img1} alt="nothing to see" onClick={showModal} />
              </div>
              <Modal
                width={"100%"}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}>
                <iframe
                  width="100%"
                  height="600px"
                  frameborder="0"
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuHn3Zlnm6SSmMnR7qHGrVVM_Fumq67-0&q=10.732531, 106.731495"
                  allowFullScreen></iframe>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Contact;
