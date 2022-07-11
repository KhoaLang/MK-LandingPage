import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";

import styles from "./AdminLayout.module.scss";
import { HeaderAdmin } from "./Header";
import { SiderbarAdmin } from "./Sidebar";

const cx = classNames.bind(styles);

export const AdminLayout = () => {
  return (
    <div className={cx("AdminLayout")}>
      <HeaderAdmin />
      <div className={cx("container")}>
        <SiderbarAdmin />
        <div className={cx("content")}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
