import "./footer.scss";
import { ReactComponent as Location } from "../../../assets/locationLogo.svg";
import { ReactComponent as Phone } from "../../../assets/phoneLogo.svg";
import { ReactComponent as Email } from "../../../assets/mail.svg";
import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";
import { ReactComponent as Youtube } from "../../../assets/youtube.svg";
import { ReactComponent as FacebookBlue } from "../../../assets/facebookBlue.svg";
import { ReactComponent as LinkedinBlue } from "../../../assets/linkedinBlue.svg";
import { ReactComponent as YoutubeBlue } from "../../../assets/youtubeBlue.svg";
import { Row, Col, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

import UK from "../../../assets/UK.png";
import VN from "../../../assets/VietNam.png";
import LanguageSelect from "../languageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";
const { Option } = Select;

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
const socialMedia = [
  {
    logo: <Facebook />,
    name: "Facebook",
  },
  {
    logo: <Linkedin />,
    name: "Linkedin",
  },
  {
    logo: <Youtube />,
    name: "Youtube",
  },
];
const socialMediaResponsive = [
  {
    logo: <FacebookBlue />,
  },
  {
    logo: <LinkedinBlue />,
  },
  {
    logo: <YoutubeBlue />,
  },
];
const Footer = () => {
  const { t, i18n } = useTranslation();

  
  const handleChange = (value) => {
    console.log("languae", value);
    i18n.changeLanguage(value);
  };
  return (
    <div className="footer">
      <div className="footer__upper d-flex justify-content-center align-items-center">
        <Row
          gutter={[0, 48]}
          className="footer__upper__container container d-flex justify-content-between"
        >
          <Col md={14} xs={24} className="footer__upper__container__left-side">
            <div className="footer__upper__container__left-side__company-name-box">
              <h5>CÔNG TY CÔNG NGHỆ VÀ ĐẦU TƯ VNPLUS</h5>
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
            <h5>Theo dõi VNPLUS</h5>
            <ul className="footer__upper__container__middle-side__follow">
              {socialMedia.map((item, idx) => (
                <li
                  className="footer__upper__container__middle-side__follow__item d-flex align-items-center"
                  key={idx}
                >
                  {item.logo}
                  <p>{item.name}</p>
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
          <Col
            md={5}
            xs={24}
            className="footer__upper__container__right-side d-flex justify-content-end"
          >
            <Select
              defaultValue="vn"
              style={{
                width: 170,
                height: "fit-content",
                color: "#fff",
              }}
              dropdownStyle={{
                width: "100%",
                backgroundColor: "#17243c",
              }}
              suffixIcon={
                <DownOutlined style={{ fontSize: "15px", color: "#fff" }} />
              }
              onChange={handleChange}
            >
              <Option value="en">
                <LanguageSelect icon={UK} name="English" />
              </Option>
              <Option value="vn">
                <LanguageSelect icon={VN} name="Tiếng Việt" />
              </Option>
            </Select>
          </Col>
        </Row>
      </div>
      <div className="footer__below d-flex justify-content-center align-items-center">
        <Row className="footer__below__container container">
          <Col md={12} xs={24} className="footer__below__container__policies ">
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </Col>
          <Col md={12} xs={24} className="footer__below__container__copyright">
            <p>Copyright &copy; 2022 VNPLUS Langing Page</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
