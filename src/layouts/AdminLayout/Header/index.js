import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export const HeaderAdmin = () => {
  return (
    <header className={cx("header")}>
      <Link to={"/admin"}>
        <img className={cx("logo")} src={images.logo} alt="logo" />
      </Link>
      <ul className={cx("nav")}>
        <li className={cx("active")}>VNPLUS</li>
        <li>Booking Studio</li>
        <li>Plus Stinv</li>
        <li>Plus Ticket</li>
        <li>Plus Trip</li>
        <li>Plus Garden</li>
        <li>Plus Food</li>
      </ul>

      <img
        className={cx("avt")}
        src="https://genk.mediacdn.vn/139269124445442048/2020/11/25/superman-angry-featured-1606319997853707582647.jpg"
      />
    </header>
  );
};
