import React, { useEffect, useState } from "react";
import styles from "./New.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Breadcrumb,
  Button,
  Form,
  Input,
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
import { createMomentAction } from "../../../../stores/actions/momentAction";
const { Option } = Select;

const cx = classNames.bind(styles);

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

export const OutstandingNew = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const { listPage } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    dispatch(getAllPageAction());
  }, []);
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    formik.setFieldValue("image", newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </div>
  );

  //test

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
      source: "",
      image: "",
      position: listPage[0].id,
    },
    validationSchema: Yup.object({
      serial: Yup.string().required("Serial is require!"),
      name: Yup.string().required("Name is require!"),
    }),
    onSubmit: (values, { resetForm }) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "image") {
          formData.append(key, values[key]);
        } else {
          formData.append("image", values.image[0].originFileObj);
        }
      }
      dispatch(createMomentAction(formData, resetForm, setFileList));
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
    formik.setFieldValue("position", value);
  };

  return (
    <div className={cx("post-new")} onSubmit={formik.handleSubmit}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}>
              <span style={{ cursor: "pointer" }}>Khoảnh khắc nổi bật</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Thêm ảnh</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("form")}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cx("top")}>
              <div className={cx("title")}>
                <h5>THÊM ẢNH </h5>
              </div>
              <div className={cx("grpBtn")}>
                <Button
                  type="primary"
                  onSubmit={formik.handleSubmit}
                  size="large"
                  htmlType="submit">
                  {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
                  THÊM ẢNH
                </Button>
              </div>
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Tên</label>
              <Input
                placeholder="Nhập tên"
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
              <label className={cx("label")}>Menu</label>
              <Select
                size={"large"}
                value={formik.values.position}
                className={cx("upload")}
                onChange={handleChangeSelect}>
                {listPage?.map((item) => {
                  return (
                    <Option label={item.name} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
              {formik.errors.position && formik.touched.position && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.position}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Hình ảnh</label>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                className={cx("upload")}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={dummyRequest}>
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}>
                <img
                  alt="example"
                  style={{
                    width: "100%",
                  }}
                  src={previewImage}
                />
              </Modal>
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
