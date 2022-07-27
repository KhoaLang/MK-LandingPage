import React, { useState, useEffect } from "react";
import styles from "./HiringDetail.module.scss";
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
  Popconfirm,
  Select,
  Switch,
  Upload,
} from "antd";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  FolderOutlined,
  LoadingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../../../stores/actions/categoryAction";
import { useNavigate, useParams } from "react-router-dom";
import { createBannerAction } from "../../../../stores/actions/bannerAction";
import { getAllPageAction } from "../../../../stores/actions/pageAction";
import { Editor } from "@tinymce/tinymce-react";
import {
  createHiringAction,
  deleteHiringAction,
  getDetailHiringAction,
  updateHiringAction,
} from "../../../../stores/actions/hiringAction";
const { Option } = Select;

const cx = classNames.bind(styles);

export const HiringDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { hiringDetail } = useSelector((state) => state.hiringReducer);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDetailHiringAction(id));
  }, [id]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      position: hiringDetail?.position,
      location: hiringDetail?.location,
      benefit: hiringDetail?.benefit,
      creator: hiringDetail?.creator,
      type: hiringDetail?.type,
      number: hiringDetail?.number,
      requirement: hiringDetail?.requirement,
      salary: hiringDetail?.salary,
      keyword: hiringDetail?.keyword,
      salary: hiringDetail?.salary,
      description: hiringDetail?.description,
      isVisible: hiringDetail?.isVisible,
    },
    validationSchema: Yup.object({
      position: Yup.string().required("Serial is require!"),
      type: Yup.string().required("Name is require!"),
      number: Yup.string().required("Name is require!"),
      salary: Yup.string().required("Name is require!"),
      keyword: Yup.string().required("Name is require!"),
      requirement: Yup.string().required("Name is require!"),
      benefit: Yup.string().required("Name is require!"),
      description: Yup.string().required("Name is require!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(updateHiringAction(id, values));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
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
      onSubmit={formik.handleSubmit}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Quản lý banner</Breadcrumb.Item>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}>
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
                <Popconfirm
                  title="Are you sure？"
                  onConfirm={async () => {
                    await dispatch(deleteHiringAction(id));
                    navigate(-1);
                  }}
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
                  <Button
                    danger
                    style={{
                      color: "#C00101",
                      borderColor: "currentcolor",
                      fontWeight: "bold",
                    }}
                    size="large">
                    <DeleteOutlined />
                    Xoá
                  </Button>
                </Popconfirm>

                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  style={{ marginLeft: "20px", fontWeight: "500" }}
                  size="large"
                  htmlType="submit">
                  {isLoading ? <LoadingOutlined /> : <FolderOutlined />}
                  Lưu Thay Đổi
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
                onChange={handleChangeSelect}>
                <Option value={0}>Fulltime</Option>
                <Option value={1}>Intern</Option>
              </Select>
              {formik.errors.locatedAt && formik.touched.locatedAt && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.name}</span>
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
                }}>
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
                }}>
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
                }}>
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
