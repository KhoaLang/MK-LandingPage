import {
  PageHeader,
  Form,
  Button,
  Select,
  Input,
  Upload,
  Switch,
  Modal,
} from "antd";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { PlusOutlined } from "@ant-design/icons";
import styles from "../New/NewPost.module.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostDetailAction,
  updatePostAction,
} from "../../../../stores/actions/postAction";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const { Option } = Select;

const cx = classNames.bind(styles);
const routes = [
  {
    path: "",
    breadcrumbName: "Tin tức - sự kiện",
  },
  {
    path: "/detail",
    breadcrumbName: "Chi tiết bài viết",
  },
];
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const DetailPost = () => {
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state.postReducer);
  const { listCategory } = useSelector((state) => state.categoryReducer);
  // const [imageUrl, setImageUrl] = useState();
  const [uploadImg, setUploadImg] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [textValue, setTextValue] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostDetailAction(id));
    // console.log(postDetail);
  }, [dispatch, id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: postDetail?.title,
      Category_ID: postDetail?.Category_ID,
      image: postDetail?.image,
      content: postDetail?.content,
      isVisible: postDetail?.isVisible,
      source: postDetail?.source,
      Category: {
        id: postDetail?.Category.id,
        name: postDetail?.Category.name,
        serial: postDetail?.Category.serial,
        description: postDetail?.Category.description,
        isVisible: postDetail?.Category.isVisible,
        numberOfArticle: postDetail?.Category.numberOfArticle,
        creator: postDetail?.Category.creator,
      },
    },
    onSubmit: (values, { resetForm }) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "image") {
          formData.append(key, values[key]);
        } else {
          formData.append("image", values.image[0].originFileObj);
          console.log(values.image[0].originFileObj);
        }
      }
      dispatch(updatePostAction(id, formData, resetForm));
      navigate("/admin/posts");
    },
  });

  //image processing
  const handleFileChange = ({ fileList: info }) => {
    setUploadImg(info.fileList);
    formik.setFieldValue("image", info);
  };
  const onchangeEdit = (newValue, editor) => {
    formik.setFieldValue("content", newValue);
  };
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

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  };

  //handle form
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
        <p>ChI TIẾT BÀI VIẾT</p>
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
              Lưu thay đổi
            </Button>
          </Form.Item>
          <Form.Item
            label="Tiêu đề"
            labelAlign="left"
            // name="formtitle"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter post title!",
            //   },
            // ]}
          >
            <Input
              name="title"
              required
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Nhập tiêu đề"
            />
          </Form.Item>
          <Form.Item
            label="Danh mục"
            labelAlign="left"
            name="category"

            // onChange={formik.handleChange}
            // value={formik.values.Category}
            // rules={[
            //   {
            //     required: true,
            //     message: "Please choose post category!",
            //   },
            // ]}
          >
            <Select
              onChange={(value) => handleFormItemChange("category", value)}
              value={formik.values.Category_ID}
              defaultValue="Category 1"
              style={{ width: "fit-content" }}
            >
              {listCategory.map((item, idx) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Avatar"
            labelAlign="left"
            name="avatar"
            // onChange={handleFileChange(event)}
            rules={[
              {
                // required: true,
                message: "Please choost an avatar for this post!",
              },
            ]}
          >
            <Upload
              fileList={uploadImg}
              listType="picture-card"
              className="avatar-uploader"
              onPreview={handlePreview}
              onChange={handleFileChange}
              customRequest={dummyRequest}
            >
              {uploadImg < 1 && "+ Upload"}
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
          <Form.Item label="Nội dung" labelAlign="left">
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              name="content"
              //   onChange={formik.handleChange}
              //   value={formik.values.content}
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
            label="Nguồn"
            labelAlign="left"
            rules={[
              {
                // required: true,
                message: "This field is required.",
              },
              {
                type: "url",
                message: "This field must be a valid url.",
              },
            ]}
          >
            <Input
              onChange={formik.handleChange}
              value={formik.values.source}
              name="source"
              placeholder="https://..."
            />
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default DetailPost;
