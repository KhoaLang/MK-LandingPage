import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ProfileOutlined,
  CameraOutlined,
  PictureOutlined,
  ShoppingOutlined,
  MailOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const cx = classNames.bind(styles);

export const SiderbarAdmin = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        className={
          ["categories"].includes(pathname.split("/")[2])
            ? " ant-menu-submenu-active"
            : ""
        }
          key={0}
          icon={<ProfileOutlined />}
          title="Tin tức-Sự kiện"
        >
          <Menu.Item
            className={
              ["posts"].includes(pathname.split("/")[2])
                ? "ant-menu-item-selected"
                : ""
            }
            key={1}
            onClick={() => navigate("posts")}
          >
            Bài viết
          </Menu.Item>
          <Menu.Item
            className={
              ["categories"].includes(pathname.split("/")[2])
                ? "ant-menu-item-selected"
                : ""
            }
            key={2}
            onClick={() => navigate("categories")}
          >
            Danh mục
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
        className={
          ["banners"].includes(pathname.split("/")[2])
            ? "ant-menu-item-selected"
            : ""
        }
          key={3}
          onClick={() => navigate("banners")}
          icon={<PictureOutlined />}
        >
          Banner
        </Menu.Item>
        <Menu.Item
         className={
          ["hiring"].includes(pathname.split("/")[2])
            ? "ant-menu-item-selected"
            : ""
        }
          key={4}
          onClick={() => navigate("hiring")}
          icon={<ShoppingOutlined />}
        >
          Tuyển dụng
        </Menu.Item>
        <Menu.Item
         className={
          ["outstanding"].includes(pathname.split("/")[2])
            ? "ant-menu-item-selected"
            : ""
        }
          key={5}
          onClick={() => navigate("outstanding")}
          icon={<CameraOutlined />}
        >
          Khoảnh khắc nổi bật
        </Menu.Item>
        <Menu.Item
         className={
          ["languages"].includes(pathname.split("/")[2])
            ? "ant-menu-item-selected"
            : ""
        }
          key={6}
          onClick={() => navigate("languages")}
          icon={<TranslationOutlined />}
        >
         Ngôn ngữ
        </Menu.Item>
      </Menu>
    </div>
  );
};
