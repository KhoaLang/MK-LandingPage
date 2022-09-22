import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import Button from "../../layouts/primaryButton/Button";
import "./otherService.scss";

import CoVan from "../../../assets/Cố vấn .svg";
import PhatTrienPhanMem from "../../../assets/Phát triển phần mềm .svg";
import TrucQuanHoaDL from "../../../assets/Trực quan hóa DL.svg";

const OtherService = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t("softwaredevelopment"),
      image: PhatTrienPhanMem,
      info: t("softwaredevelopmentdes"),
    },
    {
      title: t("consultingtechnologysolutions"),
      image: TrucQuanHoaDL,
      info: t("consultingtechnologysolutionsdes"),
    },
    {
      title: t("datavisualization"),
      image: CoVan,
      info: t("datavisualizationdes"),
    },
  ];
  return (
    <section className="other-service d-flex justify-content-center align-items-center">
      <div className="other-service__container container d-flex flex-column justify-content-center align-items-center">
        <h2>{t("Other_Services")}</h2>
        <Row gutter={[24, 24]}>
          {items.map((item, idx) => (
            <Col key={idx} md={8} xs={24}>
              <div className="other-service__container__col">
                <div className="other-service__container__col__title d-flex justify-content-between align-items-center">
                  <div className="other-service__container__col__title__image d-flex justify-content-center align-items-center">
                    <img src={item.image} alt="nothing to see" />
                  </div>
                  <div className="other-service__container__col__title__name d-flex justify-content-between align-items-center">
                    <p>{item.title}</p>
                  </div>
                </div>
                <p className="other-service__container__col__content">
                  {item.info}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <Button path="/contact" style={{ marginTop: "70px" }}>
          {t("ContactVNPLUS")}
        </Button>
      </div>
    </section>
  );
};

export default OtherService;
