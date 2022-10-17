import { Col, Row } from "antd";
import "./events.scss";
//Import Image
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPostAction } from "../../../stores/actions/postAction";
import Card from "../../layouts/card/Card";
import PrimaryButton from "../../layouts/primaryButton/Button";

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
        {/* <h2>{t("New_Event")}</h2> */}
        <h2>TIN TỨC</h2>
        <>
          <Row gutter={[48, 48]}>
            {listPost.slice(0, 3).map((item, idx) => (
              <Col
                key={idx}
                md={8}
                sm={24}
                xs={24}
                onClick={() => navigate(`/event/${item.id}`)}
              >
                <Card id={item.id} />
              </Col>
            ))}
          </Row>
          <PrimaryButton path="/event" style={{ margin: "67px auto" }}>
            {/* {t("More")} */} Xem thêm
          </PrimaryButton>
        </>
      </div>
    </section>
  );
};

export default Events;
