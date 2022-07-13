import React from "react";
import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { Breadcrumb, Button, Form, Input, Switch } from "antd";
import { DeleteOutlined, FolderOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const cx = classNames.bind(styles);

export const PostDetail = () => {
  return (
    <div className={cx("post-detail")}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Tin tức-Sự kiện</Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Chi tiết danh mục</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("top")}>
          <div className={cx("title")}>
            <h5>CHI TIẾT DANH MỤC</h5>
          </div>
          <div className={cx("grpBtn")}>
            <Button
              style={{
                color: "#C00101",
                borderColor: "currentcolor",
                fontWeight: "bold",
              }}
              size="large"
            >
              <DeleteOutlined />
              Xoá
            </Button>
            <Button style={{ marginLeft: "20px" }} type="primary" size="large">
              <FolderOutlined />
              Lưu Thay Đổi
            </Button>
          </div>
        </div>
        <div className={cx("form")}>
          <form>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Danh mục</label>
              <Input placeholder="Nhập tên danh mục" />
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Serial</label>
              <Input placeholder="Nhập số seri" />
            </div>
            <div className={cx("formItem")}>
              <label>Hiển thị</label>
              <Switch defaultChecked />
            </div>
            <div className={cx("formItem")}>
              <label>Mô tả</label>
              <TextArea rows={4} placeholder="Nhập mô tả" />
            </div>
            <div className={cx("formItem")}>
              <label>Người tạo</label>
              <Input placeholder="Tên người tạo" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
