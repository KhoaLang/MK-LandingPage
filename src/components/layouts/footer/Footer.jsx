import { Col, Row } from "antd";
import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";
import { ReactComponent as Location } from "../../../assets/locationLogo.svg";
import { ReactComponent as Email } from "../../../assets/mail.svg";
import { ReactComponent as Phone } from "../../../assets/phoneLogo.svg";
import { ReactComponent as Youtube } from "../../../assets/youtube.svg";
import "./footer.scss";

import { useNavigate } from "react-router-dom";

const socialMediaResponsive = [
  {
    logo: <Facebook />,
    title: "Facebook",
    URL: "#",
  },
  {
    logo: <Linkedin />,
    title: "Linkedin",
    URL: "#",
  },
  {
    logo: <Youtube />,
    title: "Youtube",
    URL: "#",
  },
];
const Footer = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      logo: <Location />,
      info: "19 Nguyễn Tuân Phường 3 Gò Vấp TP.HCM",
    },
    {
      logo: <Phone />,
      info: "0938 737 999",
    },
    {
      logo: <Email />,
      info: "msolutions.hello@gmail.com",
    },
  ];

  return (
    <div className="footer">
      <div className="footer__upper d-flex justify-content-center align-items-center">
        <Row
          gutter={[0, 48]}
          className="footer__upper__container container d-flex justify-content-between"
        >
          <Col md={14} xs={24} className="footer__upper__container__left-side">
            <div className="footer__upper__container__left-side__company-name-box">
              <h5>CÔNG TY CỔ PHẦN MARK SOLUTIONS</h5>
            </div>
            <ul className="footer__upper__container__left-side__contact-info">
              {contactInfo.map((item, idx) => (
                <li
                  className="footer__upper__container__left-side__contact-info__item d-flex align-items-center"
                  key={idx}
                >
                  {item.logo}
                  <p>{item.info}</p>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={5} xs={24} className="footer__upper__container__middle-side">
            <h5>Theo dõi chúng tôi</h5>
            <ul className="footer__upper__container__middle-side__follow">
              {socialMediaResponsive.map((item, idx) => (
                <li
                  className="footer__upper__container__middle-side__follow__item d-flex align-items-center"
                  key={idx}
                >
                  <a href={item?.URL} className="d-flex align-items-center">
                    {item.logo}
                    <p>{item.title}</p>
                  </a>
                </li>
              ))}
              {socialMediaResponsive.map((item, idx) => (
                <li
                  className="footer__upper__container__middle-side__follow__item-responsive d-flex align-items-center"
                  key={idx}
                >
                  {item.logo}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={5} xs={24} className="footer__upper__container__right-side">
            <div
              onClick={() => navigate("/contact")}
              style={{
                width: "fit-content",
                padding: "17px 25px",
                fontWeight: "400",
                fontSize: "18px",
                backgroundColor: "#fff",
              }}
            >
              Liên hệ chúng tôi
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer__below d-flex justify-content-center align-items-center">
        <Row className="footer__below__container container">
          <Col md={12} xs={24} className="footer__below__container__policies">
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </Col>
          <Col md={12} xs={24} className="footer__below__container__copyright">
            <p>Copyright &copy; 2022 MSolutions</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
