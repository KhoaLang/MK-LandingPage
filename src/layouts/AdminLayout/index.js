import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header/Header";
import styles from "./AdminLayout.module.scss";

const cx = classNames.bind(styles);

export const AdminLayout = () => {
  return (
    <div className={cx("AdminLayout")}>
      <Outlet />
    </div>
  );
};
