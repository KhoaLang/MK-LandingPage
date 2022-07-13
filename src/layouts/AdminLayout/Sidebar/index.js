import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useNavigate } from "react-router-dom";
import {
  ProfileOutlined,
  CameraOutlined,
  PictureOutlined,
  ShoppingOutlined,
  MailOutlined,
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
        mode="inline"
      >
        <Menu.SubMenu
          key={"1"}
          icon={<ProfileOutlined />}
          title="Tin tức-Sự kiện"
        >
          <Menu.Item key={"2"} onClick={() => navigate("posts")}>
            Bài viết
          </Menu.Item>
          <Menu.Item key={"3"} onClick={() => navigate("categories")}>
            Danh mục
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key={"4"}
          onClick={() => navigate("banners")}
          icon={<PictureOutlined />}
        >
          Banner
        </Menu.Item>
        <Menu.Item
          key={"5"}
          onClick={() => navigate("hiring")}
          icon={<ShoppingOutlined />}
        >
          Tuyển dụng
        </Menu.Item>
        <Menu.Item
          key={"7"}
          onClick={() => navigate("hots")}
          icon={<CameraOutlined />}
        >
          Khoảnh khắc nổi bậc
        </Menu.Item>
      </Menu>
    </div>
  );
};
