import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./BannerDetail.module.scss";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Breadcrumb,
  Button,
  Form,
  Input,
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
import {
  createBannerAction,
  deleteBanner,
  deleteBannerAction,
  getDetailBannerAction,
  updateBannerAction,
} from "../../../../stores/actions/bannerAction";
import { getAllPageAction } from "../../../../stores/actions/pageAction";
const { Option } = Select;

const cx = classNames.bind(styles);

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

export const BannerDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { listPage } = useSelector((state) => state.pageReducer);
  const { bannerDetail, url } = useSelector((state) => state.bannerReducer);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([{ url }]);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllPageAction());
    // console.log("[first]");
  }, []);
  // console.log("first");
  useEffect(() => {
    dispatch(getDetailBannerAction(id, setFileList));
  }, [id, dispatch]);

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
        }}
      >
        Upload
      </div>
    </div>
  );

  //test

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      serial: bannerDetail?.serial,
      name: bannerDetail?.name,
      description: bannerDetail?.description,
      creator: bannerDetail?.creator,
      isVisible: bannerDetail?.isVisible,
      source: bannerDetail?.source,
      image: bannerDetail?.image,
      locatedAt: bannerDetail?.locatedAt,
    },
    validationSchema: Yup.object({
      serial: Yup.string().required("Serial is require!"),
      name: Yup.string().required("Name is require!"),
    }),
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      let formData = new FormData();
      for (let key in values) {
        if (key !== "image") {
          // console.log(key, values[key]);

          formData.append(key, values[key]);
        } else {
          formData.append("image", values.image[0].originFileObj);
        }
      }
      // console.log(formData.get("image"));
      dispatch(updateBannerAction(id, formData));
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
    formik.setFieldValue("locatedAt", value);
  };

  return (
    <div className={cx("post-new")} onSubmit={formik.handleSubmit}>
      <div className={cx("wrapper")}>
        <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
          <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
            <Breadcrumb.Item>Quản lý banner</Breadcrumb.Item>
            <Breadcrumb.Item
              className={cx("bread")}
              onClick={() => navigate(-1)}
            >
              <span style={{ cursor: "pointer" }}>Banner</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span style={{ color: "#1EA6FB" }}>Chi tiết banner</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={cx("form")}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cx("top")}>
              <div className={cx("title")}>
                <h5>THÊM BANNER</h5>
              </div>
              <div className={cx("grpBtn")}>
                <Popconfirm
                  title="Are you sure？"
                  onConfirm={async () => {
                    await dispatch(deleteBannerAction(id));
                    navigate(-1);
                  }}
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                >
                  <Button
                    danger
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
              <label className={cx("label")}>Tên</label>
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
              <label className={cx("label")}>Menu</label>
              <Select
                size={"large"}
                defaultValue={formik.values.locatedAt}
                value={formik.values.locatedAt}
                className={cx("upload")}
                onChange={handleChangeSelect}
              >
                {listPage?.map((item) => {
                  return (
                    <Option label={item.name} key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
              {formik.errors.locatedAt && formik.touched.locatedAt && (
                <div className={cx("error")}>
                  <ExclamationCircleOutlined className={cx("icon")} />
                  <span className={cx("text")}>{formik.errors.name}</span>
                </div>
              )}
            </div>
            <div className={cx("formItem")}>
              <label className={cx("label")}>Hình ảnh</label>
              <Upload
                listType="picture-card"
                fileList={fileList}
                className={cx("upload")}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={dummyRequest}
              >
                {fileList.length > 0 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
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
              <label>Nguồn</label>
              <Input
                placeholder="Tên người tạo"
                name="source"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.source}
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
