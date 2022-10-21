import { Col, Row } from "antd";
import img from "../../../assets/home/orderly-fashion.jpg";
import img0 from "../../../assets/event/v1057-logo-30 1.jpg";
import img1 from "../../../assets/event/v1057-logo-30 1 (1).jpg";
import img2 from "../../../assets/event/v1057-logo-30 1 (2).jpg";
import img3 from "../../../assets/event/v1057-logo-30 1 (3).jpg";
import img4 from "../../../assets/event/v1057-logo-30 1 (4).jpg";
import styles from "./project.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const DATA = [
  {
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    img: img0,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    img: img1,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    img: img2,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    img: img3,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    img: img4,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
];

const Project = ({ gridColumns = 3, isHomePage = true }) => {
  const navigate = useNavigate();
  return (
    <section className={cx("project")}>
      {isHomePage && <h3>DỰ ÁN</h3>}
      <div className={cx("project-container")}>
        <Row gutter={[72, 72]}>
          {DATA.map((item, idx) =>
            isHomePage ? (
              <Col
                onClick={() => navigate(`/project/${idx}`)}
                className={cx("project-in-home-page")}
                md={24 / gridColumns}
                sm={12}
                xs={24}
                key={idx}
              >
                <div className={cx("outer-container")}>
                  <img src={item.img} alt="" />
                </div>
                <div className={cx("title")}>
                  <p>{item.name}</p>
                  <p>{item.type}</p>
                </div>
              </Col>
            ) : (
              <Col
                onClick={() => navigate(`/project/${idx}`)}
                className={cx("project-outside-homepage")}
                md={24 / gridColumns}
                sm={24}
                xs={24}
                key={idx}
              >
                <div className={cx("outer-container")}>
                  <img src={item.img} alt="" />
                </div>
                <div className={cx("title")}>
                  <p>{item.type}</p>
                  <p className={cx("name")}>{item.name}</p>
                  <p className={cx("description")}>{item.des}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </div>
    </section>
  );
};

export default Project;
