import React, { useState, useEffect } from "react";
import styles from "./CreateHiring.module.scss";
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
const { Option } = Select;

const cx = classNames.bind(styles);

export const CreateHiring = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      position: "",
      location: "",
      benefit: "",
      creator: "",
      type: 1,
      number: "",
      requirement: "",
      salary: "",
      keyword: "",
      salary: "",
      description: "",
      isVisible: true,
    },
    validationSchema: Yup.object({
      position: Yup.string().required("required!"),
      type: Yup.string().required("required!"),
      number: Yup.string().required("required!"),
      salary: Yup.string().required("required!"),
      keyword: Yup.string().required("required!"),
      requirement: Yup.string().required("required!"),
      benefit: Yup.string().required("required!"),
      description: Yup.string().required("required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(createHiringAction(values, resetForm));
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
    formik.setFieldValue("type", value);
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
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Quản lý banner</Breadcrumb.Item>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}
            >
              <span style={{ cursor: "pointer" }}>Tuyển dụng</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Đăng bài tuyển dụng</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("form")}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cx("top")}>
              <div className={cx("title")}>
                <h5>Dăng bài tuyển dụng</h5>
              </div>
              <div className={cx("grpBtn")}>
                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  size="large"
                  htmlType="submit"
                >
                  {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  Tạo Bài Đăng
                </Button>
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Vị trí</label>
              <Input
                placeholder="Nhập tên danh mục"
                name="position"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.position}
              />
              {formik.errors.position && formik.touched.position && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.position}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Type</label>
              <Select
                size={"large"}
                defaultValue={formik.values.type}
                className={cx("upload")}
                onChange={handleChangeSelect}
              >
                <Option value={1}>Fulltime</Option>
                <Option value={2}>Intern</Option>
              </Select>
              {formik.errors.type && formik.touched.type && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.type}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Số lượng</label>

              <InputNumber
                className={cx("inputNumber")}
                min={1}
                max={10}
                value={formik.values.number}
                type="number"
                name="number"
                onBlur={formik.handleBlur}
                onChange={handleChangeInputNumber}
              />

              {formik.errors.number && formik.touched.number && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.number}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Mức lương</label>
              <Input
                placeholder="Nhập tên danh mục"
                name="salary"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.salary}
              />
              {formik.errors.salary && formik.touched.salary && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.salary}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Địa điểm</label>
              <Input
                placeholder="Nhập tên danh mục"
                name="location"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.location}
              />
              {formik.errors.location && formik.touched.location && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.location}</span>
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
              <label className={cx("label")}>Keywords</label>
              <Input
                placeholder="Nhập tên danh mục"
                name="keyword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.keyword}
              />
              {formik.errors.keyword && formik.touched.keyword && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.keyword}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Job description</label>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Editor
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  value={formik.values.description}
                  onEditorChange={(newValue, editor) =>
                    onchangeEdit("description", newValue, editor)
                  }
                  init={{
                    height: 200,
                    width: "100%",
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "bold italic underline | link image | bullist numlist",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={cx("error")} style={{ margin: "0" }}>
                    <ExclamationCircleOutlined className={cx("icon")} />
                    <span className={cx("text")}>
                      {formik.errors.description}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Requirement</label>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Editor
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  value={formik.values.requirement}
                  onEditorChange={(newValue, editor) =>
                    onchangeEdit("requirement", newValue, editor)
                  }
                  init={{
                    height: 200,
                    width: "100%",
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "bold italic underline | link image | bullist numlist",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {formik.errors.requirement && formik.touched.requirement && (
                  <div className={cx("error")} style={{ margin: "0" }}>
                    <ExclamationCircleOutlined className={cx("icon")} />
                    <span className={cx("text")}>
                      {formik.errors.requirement}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Benefit</label>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <Editor
                  tinymceScriptSrc={
                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                  }
                  value={formik.values.benefit}
                  onEditorChange={(newValue, editor) =>
                    onchangeEdit("benefit", newValue, editor)
                  }
                  init={{
                    height: 200,
                    width: "100%",
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "bold italic underline | link image | bullist numlist",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {formik.errors.benefit && formik.touched.benefit && (
                  <div className={cx("error")} style={{ margin: "0" }}>
                    <ExclamationCircleOutlined className={cx("icon")} />
                    <span className={cx("text")}>{formik.errors.benefit}</span>
                  </div>
                )}
              </div>
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
