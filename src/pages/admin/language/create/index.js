import React, { useState, useEffect } from "react";
import styles from "./CreateLanguage.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Switch,
  Upload,
} from "antd";
import {
  ExclamationCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../../../stores/actions/categoryAction";
import { useNavigate } from "react-router-dom";
import { createBannerAction } from "../../../../stores/actions/bannerAction";
import { getAllPageAction } from "../../../../stores/actions/pageAction";
import { Editor } from "@tinymce/tinymce-react";
import { createHiringAction } from "../../../../stores/actions/hiringAction";
import { createLanguageAction } from "../../../../stores/actions/languageAction";
const { Option } = Select;

const cx = classNames.bind(styles);

export const CreateLanguage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      key: "",
      value: "",
      language: "vi",
    },
    validationSchema: Yup.object({
      key: Yup.string().required("required!"),
      value: Yup.string().required("required!"),
      language: Yup.string().required("required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(createLanguageAction(values, resetForm));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  };

  const handleChangeSelect = (value) => {
    formik.setFieldValue("language", value);
  };

  const onchangeEdit = (column, newValue, editor) => {
    formik.setFieldValue(column, newValue);
  };
  const handleChangeInputNumber = (value) => {
    formik.setFieldValue("number", value);
  };
  return (
    <div
      className={cx("post-new", { createHiring: "createHiring" })}
      onSubmit={formik.handleSubmit}
    >
      <div >
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}
            >
              <span style={{ cursor: "pointer" }}> Ngôn Ngữ</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Thêm Ngôn ngữ</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("form")}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cx("top")}>
              <div className={cx("title")}>
                <h5>Thêm ngôn ngữ</h5>
              </div>
              <div className={cx("grpBtn")}>
                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  size="large"
                  htmlType="submit"
                >
                  {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  Tạo ngôn ngữ
                </Button>
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Key</label>
              <Input
                placeholder=""
                name="key"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.key}
              />
              {formik.errors.key && formik.touched.key && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.key}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Ngôn ngữ</label>
              <Select
                size={"large"}
                defaultValue={formik.values.language}
                className={cx("upload")}
                onChange={handleChangeSelect}
              >
                <Option value={"vi"}>Tiếng Việt</Option>
                <Option value={"en"}>Tiếng Anh</Option>
              </Select>
              {formik.errors.language && formik.touched.language && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.language}</span>
                </div>
              )}
            </div>

            <div className={cx("formItem")}>
              <label className={cx("label")}>Value</label>
              <Input
                placeholder=""
                name="value"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.value}
              />
              {formik.errors.value && formik.touched.value && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.value}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
