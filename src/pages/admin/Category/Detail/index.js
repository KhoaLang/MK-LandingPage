import React, { useEffect } from "react";
import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { Breadcrumb, Button, Form, Input, Popconfirm, Switch } from "antd";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  FolderOutlined,
  LoadingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getDetailCatetgoryAction,
  updateCategoryAction,
} from "../../../../stores/actions/categoryAction";
import { useFormik } from "formik";
import * as Yup from "yup";

const cx = classNames.bind(styles);

export const CatetgorytDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { categoryDetail } = useSelector((state) => state.categoryReducer);
  useEffect(() => {
    dispatch(getDetailCatetgoryAction(id));
  }, [dispatch, id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      serial: categoryDetail.serial,
      name: categoryDetail.name,
      description: categoryDetail.description,
      creator: categoryDetail.creator,
      isVisible: categoryDetail.isVisible,
    },
    validationSchema: Yup.object({
      serial: Yup.string().required("Serial is require!"),
      name: Yup.string().required("Name is require!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(updateCategoryAction(id, values));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <div className={cx("post-detail")} onSubmit={formik.handleSubmit}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Tin tức-Sự kiện</Breadcrumb.Item>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}
            >
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
                <Popconfirm
                  title="Are you sure？"
                  onConfirm={async() => {
                    await dispatch(deleteCategory(id));
                    navigate(-1)
                  }}
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                >
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
                </Popconfirm>

                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  style={{ marginLeft: "20px", fontWeight: "500" }}
                  size="large"
                  htmlType="submit"
                >
                  {isLoading ? <LoadingOutlined /> : <FolderOutlined />}
                  Lưu Thay Đổi
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
