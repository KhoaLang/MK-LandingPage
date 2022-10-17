import "./coreValue.scss";

import ChinhPhuc from "../../../assets/Chinh phục.svg";
import NhietHuyet from "../../../assets/Nhiệt huyết .svg";
import DaoDuc from "../../../assets/Đạo đức .svg";
import DoiMoi from "../../../assets/Đổi mới .svg";

import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const CoreValue = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t("morality"),
      image: DaoDuc,
      info: t("moralitydes"),
    },
    {
      title: t("innovation"),
      image: DoiMoi,
      info: t("innovationdes"),
    },
    {
      title: t("enthusiasm"),
      image: NhietHuyet,
      info: t("enthusiasmdes"),
    },
    {
      title: t("conquest"),
      image: ChinhPhuc,
      info: t("conquestdes"),
    },
  ];
  return (
    <section className="core-value d-flex justify-content-center align-items-center">
      <div className="core-value__container container d-flex flex-column justify-content-center align-items-center">
        {/* <h2>{t("CoreValue")}</h2> */}
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
                <img src={item.image} alt="nothing to see" />
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
