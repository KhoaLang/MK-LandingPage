import styles from "./projectDetail.module.scss";
import classNames from "classnames/bind";
import img from "../../assets/home/orderly-fashion.jpg";
import img2 from "../../assets/project/Rectangle 514.jpg";
import img3 from "../../assets/project/Rectangle 515.jpg";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getAllProductAction } from "../../stores/actions/productAction";

const cx = classNames.bind(styles);

const ProjectDetail = () => {
  const { listProducts } = useSelector((state) => state.productReducer);
  const [projDetail, setProjDetail] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (id !== undefined) {
      setProjDetail({ ...listProducts[id] });
    }
    if (listProducts.length < 1) {
      dispatch(getAllProductAction());
    }
  }, [id]);
  useEffect(() => {
    if (id !== undefined) {
      setProjDetail({ ...listProducts[id] });
    }
  }, []);
  return (
    <section className={cx("project-detail")}>
      <SmoothScroll />
      <p className={cx("title")}>{projDetail.Type}</p>
      <p className={cx("short")}>{projDetail.Name}</p>
      <img
        src={`${process.env.REACT_APP_BACKEND_BASE_URL}${projDetail.Image}`}
        alt=""
      />
      <p
        className={cx("content")}
        dangerouslySetInnerHTML={{ __html: projDetail.Content }}
      ></p>
    </section>
  );
};

export default ProjectDetail;
