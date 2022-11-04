import { Col, Row } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as GoTo } from "../../../assets/PhArrowSquareOutLight 1.svg";
import img1 from "../../../assets/home/Group 2885.jpg";
import img2 from "../../../assets/home/Group 2886.jpg";
import img3 from "../../../assets/home/Group 2887.jpg";
import { getAllServiceAction } from "../../../stores/actions/serviceAction";
import ServicesCard from "../../layouts/servicesCard";

import "./services.scss";
import { useNavigate } from "react-router-dom";

const Services = ({ button, isHomePage = true }) => {
  const { listService } = useSelector((state) => state.serviceReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const services = listService
    .filter((item) => item.IsVisible === true)
    ?.map((item) => ({
      id: item.id,
      logo: `${process.env.REACT_APP_BACKEND_BASE_URL}${item?.Image}`,
      name: item?.Name,
      des: item?.Content,
      price: item?.Price,
      features: item?.Include.split("*/n").map((item2) => item2),
    }));
  // console.log(listProducts);
  const products = [
    {
      logo: img1,
      price: "20.000.000",
      name: "Gói cơ bản",
      link: "#",
      shortDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
      // des: t("plusstinvdes"),
    },
    {
      logo: img2,
      price: "20.000.000",
      name: "Gói nâng cao",
      link: "#",
      shortDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
      // des: t("bookingstudiodes"),
    },
    {
      logo: img3,
      price: "20.000.000",
      name: "Gói cao cấp",
      link: "#",
      shortDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ];

  useEffect(() => {
    if (listService.length === 0) {
      dispatch(getAllServiceAction());
    }
  }, []);

  return (
    <section className="our-products d-flex justify-content-center align-items-center flex-column">
      <div
        className="our-products__container"
        style={isHomePage ? {} : { width: "85%" }}
      >
        <>
          {isHomePage ? (
            <h2 className="our-products__container__title">Dịch vụ</h2>
          ) : (
            <h2
              style={{ marginTop: "0px" }}
              className="our-products__container__title d-flex flex-column align-items-center"
            >
              Bảng giá dịch vụ
              <span
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "23px",
                  margin: "10px 0 14px 0",
                }}
              >
                (Giá trên chưa bao gồm 10% VAT)
              </span>
            </h2>
          )}
          <Row gutter={isHomePage ? [72, 0] : [72, 30]}>
            {services.map((item, idx) => (
              <Col md={24 / listService?.length} xs={24} sm={24} key={idx}>
                {isHomePage ? (
                  <div className="our-products__container__items d-flex flex-column align-items-center">
                    <div className="our-products__container__items__image-section">
                      <img src={item.logo} alt="nothing to see" />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.des}</p>
                    {button && (
                      <button className="our-products__container__items__button d-flex justify-content-center align-items-center">
                        <a
                          className="d-flex justify-content-center align-items-center"
                          onClick={() => navigate("/service")}
                        >
                          <p>Xem chi tiết</p>
                        </a>
                      </button>
                    )}
                  </div>
                ) : (
                  <ServicesCard
                    name={item.name}
                    shortDesc={item.des}
                    img={item.logo}
                    features={item.features}
                    price={item.price}
                  />
                )}
              </Col>
            ))}
          </Row>
        </>
      </div>
    </section>
  );
};

export default Services;
