import { useNavigate, useParams } from "react-router-dom";
import "./eventDetail.scss";
import parse from "html-react-parser";
import { Col, Row, Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { ReactComponent as Envelope } from "../../assets/PhEnvelopeFill 1.svg";
import { ReactComponent as Facebook } from "../../assets/PhFacebookLogoFill 1.svg";
import { ReactComponent as Link } from "../../assets/link.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin2.svg";
import OtherNews from "../eventDetailLayout/otherNews/OtherNews";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostDetailAction,
  getAllPostAction,
} from "../../stores/actions/postAction";
import { LazyImage } from "../LazyImage";
import moment from "moment";
import { URL_IMAGE } from "../../utils/constants";
import { t } from "i18next";

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listPost } = useSelector((state) => state.postReducer);
  const { postDetail } = useSelector((state) => state.postReducer);
  const mainContent = parse(`${postDetail?.content}`);

  // useEffect(() => {}, [window.location.href]);

  useEffect(() => {
    if (listPost.length === 0) {
      dispatch(getAllPostAction());
    }
    dispatch(getPostDetailAction(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <section className="event-detail d-flex justify-content-center align-items-center">
      <div className="event-detail__container">
        <div className="event-detail__container__main-content">
          <Row gutter={[16, 16]}>
            <Col md={17}>
              <div className="event-detail__container__main-content__page-header">
                <Breadcrumb>
                  <Breadcrumb.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Trang chủ
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/event")}
                  >
                    Sự kiện
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Article {id}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="event-detail__container__main-content__title">
                <p>{postDetail?.title}</p>
                <p>{moment(postDetail.createdAt).format("LLLL")}</p>
              </div>
              <div className="event-detail__container__main-content__content">
                <LazyImage src={`${URL_IMAGE}${postDetail?.image}`} />
                <div className="event-detail__container__main-content__content__main d-flex flex-column">
                  {mainContent}
                </div>
              </div>
              <div className="event-detail__container__main-content__source">
                <p>
                  {t("Source")}:{" "}
                  <span>
                    <a href={postDetail.source}>{postDetail.source}</a>
                  </span>
                </p>
              </div>
              <div className="event-detail__container__main-content__share-icon d-flex justify-content-between align-items-center">
                <p>{t("Share")}: </p>
                <Facebook />
                <Envelope />
                <Linkedin />
                <Link />
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/vnplusjsc"
                data-width="340"
                data-height="152"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              >
                <blockquote
                  cite="https://www.facebook.com/vnplusjsc"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/vnplusjsc">VNPLus jsc</a>
                </blockquote>
              </div>
            </Col>
          </Row>
        </div>

        <div className="event-detail__container__other-news">
          <OtherNews
            // id={id}
            listPost={listPost}
            // postCategoryName={postDetail?.Category?.name}
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
