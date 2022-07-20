import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import styles from "./NewPost.module.scss";
import { Form, Input, PageHeader, Select, Upload, Switch, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../../../stores/actions/postAction";
import {
  getAllCatetgoryAction,
  updateCategoryAction,
} from "../../../../stores/actions/categoryAction";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const [imageUrl, setImageUrl] = useState();
  const [uploadImg, setUploadImg] = useState([]);
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      Category_ID: -1,
      image: "",
      content: "",
      isVisible: false,
      source: "",
      Category: {},
    },
    onSubmit: (values, { resetForm }) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "image") {
          formData.append(key, values[key]);
        } else {
          formData.append("image", values.image[0].originFileObj);
        }
      }
      dispatch(createPostAction(formData, resetForm));
      updateCategoryNumberOfArticles(values["Category_ID"], values["Category"]);
      navigate("/admin/posts");
    },
  });

  const updateCategoryNumberOfArticles = (category_id, category) => {
    let newCategoryForm = {
      ...category,
      numberOfArticle:
        category.numberOfArticle === null ? 1 : category.numberOfArticle + 1,
    };
    dispatch(updateCategoryAction(category_id, newCategoryForm));
  };

  const handleFileChange = (info) => {
    setUploadImg(info.fileList);
    formik.setFieldValue("image", info.fileList);
  };
  const onchangeEdit = (newValue, editor) => {
    setTextValue(newValue);
    // newValue = newValue.slice(3);
    // formik.values.content = newValue.slice(0, newValue.length - 4);
    formik.values.content = newValue;
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

  const handleFormItemChange = (name, valueTemp = null) => {
    if (name === "category") {
      let categoryObjInCategoryList = listCategory.filter(
        (item, idx) => item.id === valueTemp
      );
      console.log(categoryObjInCategoryList);
      let categoryTemp = {
        id: categoryObjInCategoryList.id,
        serial: categoryObjInCategoryList.serial,
        name: categoryObjInCategoryList.name,
        description: categoryObjInCategoryList.description,
        isVisible: categoryObjInCategoryList.isVisible,
        creator: categoryObjInCategoryList.creator,
        numberOfArticle: categoryObjInCategoryList.numberOfArticle,
      };
      formik.setFieldValue("Category", categoryTemp);
      formik.setFieldValue("Category_ID", valueTemp);
    }
    return (value) => {
      if (!name.includes("category")) {
        formik.setFieldValue(name, value);
      }
    };
  };

  useEffect(() => {
    setImageUrl(uploadImg[uploadImg?.length - 1] || 0);
  }, [uploadImg]);

  useEffect(() => {
    dispatch(getAllCatetgoryAction());
  }, []);

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
            // onChange={formik.handleChange}
            // value={formik.values.Category}
            rules={[
              {
                required: true,
                message: "Please choose post category!",
              },
            ]}
          >
            <Select
              onChange={(value) => handleFormItemChange("category", value)}
              value={formik.values.Category}
              defaultValue="Category 1"
              style={{ width: "fit-content" }}
            >
              {listCategory.map((item, idx) => (
                <Option key={idx} value={item.id}>
                  {item.name}
                </Option>
              ))}
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
