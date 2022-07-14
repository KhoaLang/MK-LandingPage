import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import styles from "./NewPost.module.scss";
import { Form, Input, PageHeader, Select, Upload, Switch, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";

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

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [uploadImg, setUploadImg] = useState([]);
  const [textValue, setTextValue] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      avatar: "",
      content: "",
      isVisible: false,
      source: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = (info) => {
    setUploadImg(info.fileList);
    formik.setFieldValue("avatar", info.fileList);
  };
  const onchangeEdit = (newValue, editor) => {
    setTextValue(newValue);
    newValue = newValue.slice(3);
    formik.values.content = newValue.slice(0, newValue.length - 4);
  };

  const handlePreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  };

  const handleFormItemChange = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  useEffect(() => {
    setImageUrl(uploadImg[uploadImg?.length - 1] || 0);
  }, [uploadImg]);

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
        <Form
          onFinish={formik.handleSubmit}
          // onChange={() => console.log(form)}
          // form={form}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
        >
          <Form.Item
            wrapperCol={{
              offset: 21,
            }}
          >
            <Button type="primary" htmlType="submit">
              <PlusOutlined />
              Tạo bài viết
            </Button>
          </Form.Item>
          <Form.Item
            label="Tiêu đề"
            name="title"
            labelAlign="left"
            onChange={formik.handleChange}
            value={formik.values.title}
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
            onChange={formik.handleChange}
            value={formik.values.category}
            rules={[
              {
                required: true,
                message: "Please choose post category!",
              },
            ]}
          >
            <Select
              onChange={handleFormItemChange("category")}
              value={formik.values.category}
              defaultValue="Category1"
              style={{ width: "fit-content" }}
            >
              <Option value="Category1">Category 1</Option>
              <Option value="Category2">Category 2</Option>
              <Option value="Category3">Category 3</Option>
              <Option value="Category4">Category 4</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Avatar"
            name="avatar"
            labelAlign="left"
            // onChange={handleFileChange(event)}
            rules={[
              {
                required: true,
                message: "Please choost an avatar for this post!",
              },
            ]}
          >
            <Upload
              fileList={uploadImg}
              listType="picture-card"
              className="avatar-uploader"
              onChange={handleFileChange}
              value={formik.values.avatar}
              // showUploadList={true}
              previewFile={handlePreview}
              customRequest={dummyRequest}
            >
              {uploadImg < 1 && "+ Upload"}
            </Upload>
          </Form.Item>
          <Form.Item label="Hiển thị" name="visible" labelAlign="left">
            <Switch
              checked={formik.values.isVisible}
              onChange={handleFormItemChange("isVisible")}
            />
          </Form.Item>
          <Form.Item
            onChange={formik.handleChange}
            value={formik.values.content}
            label="Nội dung"
            name="content"
            labelAlign="left"
          >
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={formik.values.content}
              onEditorChange={(newValue, editor) =>
                onchangeEdit(newValue, editor)
              }
              init={{
                height: 300,
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
                toolbar: "bold italic underline | link image | bullist numlist",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </Form.Item>
          <Form.Item
            onChange={formik.handleChange}
            value={formik.values.source}
            label="Nguồn"
            name="source"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "This field is required.",
              },
              {
                type: "url",
                message: "This field must be a valid url.",
              },
            ]}
          >
            <Input placeholder="https://..." />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default NewPost;
