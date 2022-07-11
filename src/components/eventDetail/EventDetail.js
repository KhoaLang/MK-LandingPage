import { useParams } from "react-router-dom";
import "./eventDetail.scss";
import { Col, Row, PageHeader } from "antd";
import { useState } from "react";
import img1 from "../../assets/Frame 61.png";
import { ReactComponent as Envelope } from "../../assets/PhEnvelopeFill 1.svg";
import { ReactComponent as Facebook } from "../../assets/PhFacebookLogoFill 1.svg";
import { ReactComponent as Link } from "../../assets/link.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin2.svg";
import OtherNews from "../eventDetailLayout/otherNews/OtherNews";

const routes = [
  {
    path: "/",
    breadcrumbName: "Trang chủ",
  },
  {
    path: "/event",
    breadcrumbName: "Sự kiện",
  },
  {
    path: "/article1",
    breadcrumbName: "Article 1",
  },
];

const EventDetail = (props) => {
  let { id } = useParams();
  const { image, title, date } = props;
  const [current, setCurrent] = useState(0);

  return (
    <section className="event-detail d-flex justify-content-center align-items-center">
      <div className="event-detail__container">
        <div className="event-detail__container__main-content">
          <Row gutter={[16]}>
            <Col md={15}>
              <div className="event-detail__container__main-content__page-header">
                <PageHeader
                  style={{ padding: "0px" }}
                  className="site-page-header"
                  breadcrumb={{
                    routes,
                  }}
                />
              </div>
              <div className="event-detail__container__main-content__title">
                <p>
                  Offshore vs. Outsourcing – What’s the Different? What’s
                  suitable to your Business?
                </p>
                <p>28/6/2022</p>
              </div>
              <div className="event-detail__container__main-content__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <img src={img1} alt="nothing to see" />
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </p>
              </div>
              <div className="event-detail__container__main-content__share-icon d-flex justify-content-between align-items-center">
                <p>Chia sẻ:</p>
                <Facebook />
                <Envelope />
                <Linkedin />
                <Link />
              </div>
            </Col>
            <Col md={6}>Facebook shortcut</Col>
          </Row>
        </div>

        <div className="event-detail__container__other-news">
          <OtherNews />
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
