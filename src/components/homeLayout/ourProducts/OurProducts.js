import { Row, Col } from "antd";
import "./ourProducts.scss";
//Import Images
import plusstinv from "../../../assets/plusstinv.png";
import bookingstudio from "../../../assets/bookingstudio.png";
import plusticket from "../../../assets/plusticket.png";
import plustrip from "../../../assets/plustrip.png";
import gardenie from "../../../assets/gardenie.png";
import plusfood from "../../../assets/plusfood.png";
import { ReactComponent as GoTo } from "../../../assets/PhArrowSquareOutLight 1.svg";

const OurProducts = (props) => {
  const products = [
    {
      logo: plusstinv,
      name: "Plusstinv",
      link: "#",
    },
    {
      logo: bookingstudio,
      name: "Booking Studio",
      link: "#",
    },
    {
      logo: plusticket,
      name: "Plus Ticket",
      link: "#",
    },
    {
      logo: plustrip,
      name: "Plus Trip",
      link: "#",
    },
    {
      logo: gardenie,
      name: "Gardenie",
      link: "#",
    },
    {
      logo: plusfood,
      name: "Plus Food",
      link: "#",
    },
  ];
  return (
    <section className="our-products d-flex justify-content-center align-items-center flex-column">
      <div className="our-products__container container">
        <h2 className="our-products__container__title">Sản phẩm của VNPLUS</h2>
        <Row gutter={[48, 48]}>
          {products.map((item, idx) => (
            <Col md={8} xs={24} sm={12} key={idx}>
              <div className="our-products__container__items">
                <div className="our-products__container__items__image-section">
                  <img src={item.logo} alt="nothing to see" />
                </div>
                <h3>{item.name}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  magnam laborum cum illum ipsum placeat vitae labore nostrum
                </p>
                {props.button && (
                  <button className="our-products__container__items__button d-flex justify-content-center align-items-center">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <p>Xem chi tiết</p>
                      <GoTo />
                    </a>
                  </button>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default OurProducts;