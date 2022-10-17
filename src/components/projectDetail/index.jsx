import styles from "./projectDetail.module.scss";
import classNames from "classnames/bind";
import img from "../../assets/home/orderly-fashion.jpg";
import img2 from "../../assets/home/hero_bg_greyscale.jpg";

const cx = classNames.bind(styles);

const ProjectDetail = () => {
  return (
    <section className={cx("project-detail")}>
      <p className={cx("title")}>Lorem ipsum</p>
      <p className={cx("short")}>Lorem ipsum</p>
      <p className={cx("content")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id non proident, sunt in culpa qui officia
      </p>
      <img src={img} alt="" />
      <p className={cx("content")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id non proident, sunt in culpa qui officia
      </p>
      <img src={img2} alt="" />
      <p className={cx("content")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id non proident, sunt in culpa qui officia
      </p>
      <img src={img2} alt="" />
      <p className={cx("content")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id non proident, sunt in culpa qui officia
      </p>
    </section>
  );
};

export default ProjectDetail;
