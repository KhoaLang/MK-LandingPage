import "./events.scss";
import { Row, Col } from "antd";
//Import Image
import image1 from "../../../assets/Rectangle138.png";
import image2 from "../../../assets/Rectangle138(1).png";
import image3 from "../../../assets/Rectangle138(2).png";
import Card from "../../layouts/card/Card";
import PrimaryButton from "../../layouts/primaryButton/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../../stores/actions/postAction";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listPost } = useSelector((state) => state.postReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllPostAction());
  }, [dispatch]);
  return (
    <section className="events d-flex justify-content-center align-items-center">
      <div className="events__container container d-flex justify-content-center align-items-center flex-column">
        <h2>{t("New_Event")}</h2>
        <>
          <Row gutter={[48, 48]}>
            {listPost.slice(0, 3).map((item, idx) => (
              <Col
                key={idx}
                md={8}
                xs={24}
                onClick={() => navigate(`/event/${item.id}`)}
              >
                <Card id={item.id} />
              </Col>
            ))}
          </Row>
          <PrimaryButton path="/event" style={{ margin: "67px auto" }}>
            {t("More")}
          </PrimaryButton>
        </>
      </div>
    </section>
  );
};

export default Events;
