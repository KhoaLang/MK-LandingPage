import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import bookingstudio from "../../../assets/bookingstudio.png";
import gardenie from "../../../assets/gardenie.png";
import { ReactComponent as GoTo } from "../../../assets/PhArrowSquareOutLight 1.svg";
import plusfood from "../../../assets/plusfood.png";
import plusstinv from "../../../assets/plusstinv.png";
import plusticket from "../../../assets/plusticket.png";
import plustrip from "../../../assets/plustrip.png";
import "./ourProducts.scss";

const OurProducts = (props) => {
  const { t } = useTranslation();
  const products = [
    {
      logo: plusstinv,
      name: "Plusstinv",
      link: "https://www.facebook.com/plusstinv",
      des: t("plusstinvdes"),
    },
    {
      logo: bookingstudio,
      name: "Booking Studio",
      link: "https://www.facebook.com/BookingStudio.vnplus.vn",
      des: t("bookingstudiodes"),
    },
    {
      logo: plusticket,
      name: "Plus Ticket",
      link: "#",
      des: t("plusticketdes"),
    },
    {
      logo: plustrip,
      name: "Plus Trip",
      link: "#",
      des: t("plustripdes"),
    },
    {
      logo: gardenie,
      name: "Gardenie",
      link: "#",
      des: t("gardeniades"),
    },
    {
      logo: plusfood,
      name: "Plus Food",
      link: "#",
      des: t("plusfooddes"),
    },
  ];
  return (
    <section className="our-products d-flex justify-content-center align-items-center flex-column">
      <div className="our-products__container container">
        <>
          <h2 className="our-products__container__title">
            {t("Products_Of_VNPLUS")}
          </h2>

          <Row gutter={[48, 48]}>
            {products.map((item, idx) => (
              <Col md={8} xs={24} sm={12} key={idx}>
                <div className="our-products__container__items">
                  <div className="our-products__container__items__image-section">
                    <img src={item.logo} alt="nothing to see" />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.des}</p>
                  {props.button && (
                    <button className="our-products__container__items__button d-flex justify-content-center align-items-center">
                      <a
                        className="d-flex justify-content-center align-items-center"
                        href={item.link}
                      >
                        <p>{t("More detail")}</p>
                        <GoTo />
                      </a>
                    </button>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </>
      </div>
    </section>
  );
};

export default OurProducts;
