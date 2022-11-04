import { useNavigate, useParams } from "react-router-dom";
import "./eventDetail.scss";
import parse from "html-react-parser";
import { Col, Row, Breadcrumb } from "antd";
import { useEffect } from "react";
import { ReactComponent as Envelope } from "../../assets/PhEnvelopeFill 1.svg";
import { ReactComponent as Facebook } from "../../assets/PhFacebookLogoFill 1.svg";
import { ReactComponent as Link } from "../../assets/link.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin2.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostDetailAction,
  getAllPostAction,
} from "../../stores/actions/postAction";
import { LazyImage } from "../LazyImage";
import moment from "moment";
import OtherNews from "../eventDetailLayout/otherNews/OtherNews";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listPost } = useSelector((state) => state.postReducer);
  const { postDetail } = useSelector((state) => state.postReducer);
  const mainContent = parse(`${postDetail?.content}`);

  useEffect(() => {
    if (listPost.length === 0) {
      dispatch(getAllPostAction());
    }
    dispatch(getPostDetailAction(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <section className="event-detail d-flex justify-content-center align-items-center">
      <SmoothScroll />
      <div className="event-detail__container d-flex flex-column justify-content-center">
        <div className="event-detail__container__main-content ">
          <Row gutter={[16, 16]}>
            <Col md={24}>
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
                <p>{moment(postDetail.createdAt).format("DD/MM/YYYY")}</p>
              </div>
              <div className="event-detail__container__main-content__content">
                <LazyImage
                  src={`${process.env.REACT_APP_BACKEND_BASE_URL}${postDetail?.image}`}
                />
                <div className="event-detail__container__main-content__content__main d-flex flex-column">
                  {mainContent}
                </div>
              </div>
              <div className="event-detail__container__main-content__share-icon d-flex justify-content-between align-items-center">
                <span className="d-flex justify-content-between align-items-center">
                  <p>Chia sẻ: </p>
                  <Facebook />
                  <Envelope />
                  <Linkedin />
                  <Link />
                </span>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div className="event-detail__container__other-news">
          <OtherNews />
        </div> */}
      </div>
    </section>
  );
};

export default EventDetail;
