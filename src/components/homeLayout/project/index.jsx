import { Col, Row } from "antd";
import img from "../../../assets/home/orderly-fashion.jpg";
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
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "",
  },
  {
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "",
  },
  {
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "",
  },
  {
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "",
  },
  {
    img: img,
    name: "Orderly Fashion",
    type: "Thương hiệu thời trang",
    des: "",
  },
];

const Project = ({ gridColumns = 3, isHomePage = true }) => {
  const navigate = useNavigate();
  return (
    <section className={cx("project")}>
      {isHomePage && <h3>DỰ ÁN</h3>}
      <div
        style={isHomePage ? {} : { width: "80%" }}
        className={cx("project-container")}
      >
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
                  <p>{item.name}</p>
                  <p>{item.des}</p>
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
