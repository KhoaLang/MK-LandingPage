import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCatetgoryAction } from "../../stores/actions/categoryAction";
import styles from "./AdminLayout.module.scss";
import { HeaderAdmin } from "./Header";
import { SiderbarAdmin } from "./Sidebar";

const cx = classNames.bind(styles);

export const AdminLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCatetgoryAction());
  }, [dispatch]);

  return (
    <div className={cx("AdminLayout")}>
      <HeaderAdmin />
      <div className={cx("container")}>
        <SiderbarAdmin />
        <div className={cx("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
