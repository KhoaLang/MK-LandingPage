import "./contact.scss";
import { Row, Col, Form, Input, Modal } from "antd";
import Button from "../layouts/primaryButton/Button";
import { ReactComponent as Location } from "../../assets/locationLogo.svg";
import { ReactComponent as Phone } from "../../assets/phoneLogo.svg";
import { ReactComponent as Email } from "../../assets/mail.svg";
import img1 from "../../assets/Frame 66.png";
import { useEffect, useState } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { createContactAction } from "../../stores/actions/contactAction";

const Contact = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { companyInfo } = useSelector((state) => state.companyInfoReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const contactInfo = [
    {
      logo: <Location />,
      info: t("address"),
    },
    {
      logo: <Phone />,
      info: companyInfo?.PhoneNumber,
    },
    {
      logo: <Email />,
      info: companyInfo?.Email,
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = () => {
    dispatch(
      createContactAction(
        {
          Name: form.getFieldValue("name"),
          PhoneNumber: form.getFieldValue("phonenumber"),
          Email: form.getFieldValue("email"),
          Content: form.getFieldValue("help"),
        },
        form.resetFields
      )
    );
  };
  return (
    <section className="contact d-flex justify-content-center">
      <SmoothScroll />
      <div className="contact__container d-flex flex-column justify-content-center align-items-center">
        {/* <h2>{t("ContactVNPLUS")}</h2> */}
        <h2>Liên hệ với chúng tôi</h2>
        <div className="contact__container__form">
          <Row gutter={[20]}>
            <Col md={14} xs={24}>
              <Form
                form={form}
                labelCol={{
                  span: 16,
                }}
                wrapperCol={{
                  span: 20,
                }}
                layout="vertical"
                onFinish={onFinish}
              >
                <Col md={24}>
                  <Form.Item
                    // label={t("FullName")}
                    label="Họ và tên"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập họ và tên!",
                      },
                    ]}
                  >
                    <Input style={{ padding: "10px" }} />
                  </Form.Item>
                </Col>
                <Col md={24}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input style={{ padding: "10px" }} />
                  </Form.Item>
                </Col>
                <Col md={24}>
                  <Form.Item
                    // label={t("PhoneNumber")}
                    label="Số điện thoại"
                    name="phonenumber"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input style={{ padding: "10px" }} />
                  </Form.Item>
                </Col>
                <Col md={24}>
                  <Form.Item
                    // label={t("WhatCanWeHelpYou")}
                    label="Nội dung liên hệ"
                    name="help"
                    rules={[
                      {
                        required: true,
                        message: "Bạn thắc mắc điều gì?",
                      },
                    ]}
                  >
                    <Input.TextArea autoSize={{ minRows: "7" }} />
                  </Form.Item>
                </Col>
                {/* <Button style={{ marginTop: "26px" }}>{t("Send")}</Button> */}
                <Button style={{ marginTop: "26px" }}>Gửi</Button>
              </Form>
            </Col>
            <Col md={10} xs={24}>
              <div className="contact__container__form__map">
                <img src={img1} alt="nothing to see" onClick={showModal} />
              </div>
              <div className="contact__container__form__company-info d-flex justify-content-center align-items-center">
                {/* <h5>{t("CompanyName")}</h5>
                <ul className="footer__upper__container__left-side__contact-info">
                  {contactInfo.map((item, idx) => (
                    <li
                      className="footer__upper__container__left-side__contact-info__item d-flex align-items-center"
                      key={idx}
                    >
                      {item.logo}
                      <p style={{ color: "#000" }}>{item.info}</p>
                    </li>
                  ))}
                </ul> */}
                <p>Logo</p>
              </div>

              <Modal
                className="map"
                width={"100%"}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
              >
                <iframe
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GG_API_KEY}_Fumq67-0&q=10.732531, 106.731495`}
                  allowFullScreen
                ></iframe>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Contact;
