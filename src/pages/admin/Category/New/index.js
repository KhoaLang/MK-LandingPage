import React from "react";
import styles from "./PostNew.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Breadcrumb, Button, Input, Switch } from "antd";
import {
  ExclamationCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../../../stores/actions/categoryAction";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

export const CategorytNew = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      serial: "",
      name: "",
      description: "",
      creator: "",
      isVisible: false,
    },
    validationSchema: Yup.object({
      serial: Yup.string().required("Serial is require!"),
      name: Yup.string().required("Name is require!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(createCategoryAction(values, resetForm));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <div className={cx("post-new")} onSubmit={formik.handleSubmit}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Tin tức-Sự kiện</Breadcrumb.Item>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}>
              <span style={{ cursor: "pointer" }}>Danh mục</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Tạo danh mục</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("form")}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cx("top")}>
              <div className={cx("title")}>
                <h5>TẠO DANH MỤC</h5>
              </div>
              <div className={cx("grpBtn")}>
                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  size="large"
                  htmlType="submit">
                  {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  Tạo Danh Mục
                </Button>
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Danh mục</label>
              <Input
                placeholder="Nhập tên danh mục"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.name}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Serial</label>
              <Input
                placeholder="Nhập số seri"
                name="serial"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.serial}
              />
              {formik.errors.serial && formik.touched.serial && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.serial}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label>Hiển thị</label>

              <Switch
                checked={formik.values.isVisible}
                onChange={handleChangeSwitch("isVisible")}
              />
            </div>
            <div className={cx("formItem")}>
              <label>Mô tả</label>
              <TextArea
                // onChange={handleChangeTextArea}
                rows={4}
                placeholder="Nhập mô tả"
                name="description"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className={cx("formItem")}>
              <label>Người tạo</label>
              <Input
                placeholder="Tên người tạo"
                name="creator"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.creator}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
