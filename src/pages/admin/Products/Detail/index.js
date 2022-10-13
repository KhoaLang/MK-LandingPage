import {
  Breadcrumb,
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
import styles from "../products.module.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostDetailAction,
  updatePostAction,
} from "../../../../stores/actions/postAction";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  getAllProductAction,
  updateProductAction,
} from "../../../../stores/actions/productAction";

const cx = classNames.bind(styles);

const Detail = () => {
  const { listProducts } = useSelector((state) => state.productReducer);

  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = () => {
    const formData = new FormData();
    formData.append("Name", form.getFieldValue("name"));
    formData.append("IsVisible", form.getFieldValue("visible"));
    formData.append("Content", form.getFieldValue("content"));
    formData.append("Type", form.getFieldValue("type"));
    formData.append("URL", form.getFieldValue("url"));
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj);
    }

    const res = dispatch(
      updateProductAction(listProducts[params.id].id, formData)
    );

    if (res !== null) {
      navigate("/admin/product");
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  useEffect(() => {
    form.setFieldsValue({
      name: listProducts[params.id]?.Name,
      logo: listProducts[params.id]?.Image,
      type: listProducts[params.id]?.Type,
      content: listProducts[params.id]?.Content,
      visible: listProducts[params.id]?.IsVisible,
      url: listProducts[params.id]?.URL,
    });
  }, [listProducts]);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Quản lý sản phẩm</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Chỉnh sửa sản phẩm</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Form
        className={cx("edit-form")}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          wrapperCol={{
            offset: 21,
          }}
        >
          <Button className={cx("edit-btn")} type="primary" htmlType="submit">
            <PlusOutlined />
            Sửa thông tin
          </Button>
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input the product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Loại sản phẩm"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input the product type!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="url"
          label="URL"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input the product URL!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Logo sản phẩm"
          style={{ fontWeight: "500", display: "flex" }}
          rules={[
            {
              required: true,
              message: "Please upload an image!",
            },
          ]}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={fileList}
            listType="picture-card"
            className={cx("avatar-uploader")}
            onChange={handleChange}
            customRequest={dummyRequest}
          >
            {fileList.length < 1 && <p>+ Upload</p>}
          </Upload>
          {fileList.length < 1 && (
            <img
              // style={{ marginLeft: "200px" }}
              src={`${process.env.REACT_APP_BACKEND_BASE_URL}${
                listProducts[params.id]?.Image
              }`}
              alt=""
            />
          )}
        </Form.Item>
        <Form.Item
          valuePropName="visible"
          label="Hiển thị"
          name="visible"
          labelAlign="left"
        >
          <Switch
            checked={listProducts?.IsVisible}
            onChange={(checked) => form.setFieldsValue("visible", !checked)}
          />
        </Form.Item>
        <Form.Item
          name="content"
          label="Nội dung"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input service content!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </section>
  );
};

export default Detail;
