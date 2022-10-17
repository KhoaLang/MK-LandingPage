import {
  CameraOutlined,
  PictureOutlined,
  ProfileOutlined,
  ShoppingOutlined,
  TranslationOutlined,
  BankOutlined,
  AppstoreOutlined,
  PhoneOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";

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
              ? "ant-menu-submenu-active"
              : ""
          }
          key={0}
          icon={<ProfileOutlined />}
          title="Tin tức"
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
        <Menu.Item
          className={
            ["companyinfo"].includes(pathname.split("/")[2])
              ? "ant-menu-item-selected"
              : ""
          }
          key={7}
          onClick={() => navigate("companyinfo")}
          icon={<BankOutlined />}
        >
          Thông tin công ty
        </Menu.Item>
        <Menu.Item
          className={
            ["socialmedia"].includes(pathname.split("/")[2])
              ? "ant-menu-item-selected"
              : ""
          }
          key={8}
          onClick={() => navigate("socialmedia")}
          icon={<AppstoreOutlined />}
        >
          Mạng xã hội
        </Menu.Item>
        <Menu.Item
          className={
            ["service"].includes(pathname.split("/")[2])
              ? "ant-menu-item-selected"
              : ""
          }
          key={9}
          onClick={() => navigate("service")}
          icon={<AppstoreOutlined />}
        >
          Dịch vụ
        </Menu.Item>
        <Menu.Item
          className={
            ["contact"].includes(pathname.split("/")[2])
              ? "ant-menu-item-selected"
              : ""
          }
          key={10}
          onClick={() => navigate("contact")}
          icon={<PhoneOutlined />}
        >
          Thông tin liên hệ
        </Menu.Item>
        <Menu.Item
          className={
            ["product"].includes(pathname.split("/")[2])
              ? "ant-menu-item-selected"
              : ""
          }
          key={11}
          onClick={() => navigate("product")}
          icon={<FundProjectionScreenOutlined />}
        >
          Sản phẩm
        </Menu.Item>
      </Menu>
    </div>
  );
};
