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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductAction } from "../../../stores/actions/productAction";

const cx = classNames.bind(styles);
// const DATA = [
//   {
//     Image: img,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
//   {
//     Image: img0,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
//   {
//     Image: img1,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
//   {
//     Image: img2,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
//   {
//     Image: img3,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
//   {
//     Image: img4,
//     Name: "Orderly Fashion",
//     Type: "Thương hiệu thời trang",
//     Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
//   },
// ];

const Project = ({ gridColumns = 3, isHomePage = true }) => {
  const { listProducts } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DATA = listProducts.map((item, idx) => ({
    Image: `${process.env.REACT_APP_BACKEND_BASE_URL}${item.Image}`,
    Name: item?.Name,
    Type: item?.Type,
    IsVisible: item?.IsVisible,
    Des: item?.Content,
    id: item?.id,
  }));

  useEffect(() => {
    if (listProducts.length < 1) {
      dispatch(getAllProductAction());
    }
  }, []);
  return (
    <section className={cx("project")}>
      {isHomePage && <h3>DỰ ÁN</h3>}
      <div className={cx("project-container")}>
        <Row gutter={[72, 72]}>
          {DATA.map((item, idx) =>
            isHomePage ? (
              <Col
                onClick={() => navigate(`/project/${item.id}`)}
                className={cx("project-in-home-page")}
                md={24 / listProducts.length}
                sm={12}
                xs={24}
                key={item.id}
              >
                <div className={cx("outer-container")}>
                  <img src={item.Image} alt="" />
                </div>
                <div className={cx("title")}>
                  <p>{item.Name}</p>
                  <p>{item.Type}</p>
                </div>
              </Col>
            ) : (
              <Col
                onClick={() => navigate(`/project/${item.id}`)}
                className={cx("project-outside-homepage")}
                md={24 / listProducts.length}
                sm={24}
                xs={24}
                key={item.id}
              >
                <div className={cx("outer-container")}>
                  <img src={item.Image} alt="" />
                </div>
                <div className={cx("title")}>
                  <p>{item.Type}</p>
                  <p className={cx("name")}>{item.Name}</p>
                  <p
                    className={cx("description")}
                    dangerouslySetInnerHTML={{ __html: item.Des }}
                  ></p>
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
