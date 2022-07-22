import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import styles from "./NewPost.module.scss";
import {
  Form,
  Input,
  Breadcrumb,
  Select,
  Upload,
  Switch,
  Button,
  Modal,
} from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
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

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const NewPost = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const [textValue, setTextValue] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
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

  // const handleFileChange = (info) => {
  //   setUploadImg(info.fileList);
  //   formik.setFieldValue("image", info.fileList);
  // };
  const onchangeEdit = (newValue, editor) => {
    setTextValue(newValue);
    // newValue = newValue.slice(3);
    // formik.values.content = newValue.slice(0, newValue.length - 4);
    formik.values.content = newValue;
  };

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
  const handleCancel = () => setPreviewVisible(false);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    formik.setFieldValue("image", newFileList);
  };
  // const handlePreview = async (file) => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow.document.write(image.outerHTML);
  // };

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
      // console.log(categoryObjInCategoryList);
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

  // useEffect(() => {
  //   setImageUrl(uploadImg[uploadImg?.length - 1] || 0);
  // }, [uploadImg]);

  useEffect(() => {
    dispatch(getAllCatetgoryAction());
  }, []);

  return (
    <section className={cx("edit-post")}>
      <div className={cx("edit-post__page-header")}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item>Tin tức-Sự kiện</Breadcrumb.Item>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Bài viết</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Tạo bài viết</span>
          </Breadcrumb.Item>
        </Breadcrumb>
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
              {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
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
            label="Image"
            name="image"
            labelAlign="left"
            // onChange={handleChange}
            // value={formik.values.image}
            rules={[
              {
                // required: true,
                message: "Please choost an image for this post!",
              },
            ]}
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              fileList={fileList}
              listType="picture-card"
              className="avatar-uploader"
              // onChange={handleFileChange}
              onChange={handleChange}
              value={formik.values.image}
              // showUploadList={true}
              // previewFile={handlePreview}
              onPreview={handlePreview}
              customRequest={dummyRequest}
            >
              {/* {uploadImg < 1 && "+ Upload"} */}
              {fileList?.length < 1 && "+ Upload"}
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
