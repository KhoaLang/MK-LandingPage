import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ProfileOutlined,
  CameraOutlined,
  PictureOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const cx = classNames.bind(styles);

export const SiderbarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className={cx("sidebar")}>
      <Menu
        style={{
          width: "100%",
          marginTop: "48px",
          fontSize: "17px",
        }}
        // defaultOpenKeys={["sub1"]}
        // items={items}
        mode="inline"
      >
        <Menu.SubMenu icon={<ProfileOutlined />} title="Tin tức-Sự kiện">
          <Menu.Item onClick={() => navigate("posts")}>Bài viết</Menu.Item>
          <Menu.Item onClick={() => navigate("categories")}>Danh mục</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          onClick={() => navigate("banners")}
          icon={<PictureOutlined />}
        >
          Banner
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("hiring")}
          icon={<ShoppingOutlined />}
        >
          Tuyển dụng
        </Menu.Item>
        <Menu.Item onClick={() => navigate("hots")} icon={<CameraOutlined />}>
          Khoảnh khắc nổi bậc
        </Menu.Item>
      </Menu>
    </div>
  );
};
