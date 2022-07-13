import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./newPost.module.scss";
import { Form, Input, PageHeader, Select, message, Upload, Switch } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import CustomEditor from "../layouts/CustomTextEditor";

const { Option } = Select;

const cx = classNames.bind(styles);
const routes = [
  {
    path: "",
    breadcrumbName: "Tin tức - sự kiện",
  },
  {
    path: "/newpost",
    breadcrumbName: "Tạo bài viết",
  },
];

//image process
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [form] = Form.useForm();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <section className={cx("edit-post")}>
      <div className={cx("edit-post__page-header")}>
        <PageHeader
          style={{ padding: "0px", color: "#1EA6FB" }}
          className="site-page-header"
          breadcrumb={{
            routes,
          }}
        />
      </div>
      <div className={cx("edit-post__form")}>
        <p>TẠO BÀI VIẾT</p>
        <Form form={form} labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
          <Form.Item
            label="Tiêu đề"
            name="title"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Please enter post title!",
              },
            ]}
          >
            <Input placeholder="Nhập tiêu đề" />
          </Form.Item>
          <Form.Item
            label="Danh mục"
            name="category"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Please choose post category!",
              },
            ]}
          >
            <Select defaultValue="category1" style={{ width: "fit-content" }}>
              <Option value="category1">Category 1</Option>
              <Option value="category2">Category 2</Option>
              <Option value="category3">Category 3</Option>
              <Option value="category4">Category 4</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Avatar"
            name="avatar"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Please choost an avatar for this post!",
              },
            ]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Hiển thị" name="visible" labelAlign="left">
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item label="Nội dung" name="content" labelAlign="left">
            <CustomEditor />
            <Input.TextArea
              style={{ marginTop: "10px" }}
              placeholder="Nhập nội dung"
            />
          </Form.Item>
          <Form.Item label="Nguồn" name="source" labelAlign="left">
            <Input placeholder="https://..." />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default NewPost;
