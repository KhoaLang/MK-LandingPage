import { PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Form, Input, Switch, Upload } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductAction } from "../../../../stores/actions/productAction";
import styles from "../products.module.scss";

const cx = classNames.bind(styles);

const New = () => {
  const [fileList, setFileList] = useState([]);
  const [logo, setLogo] = useState(""); //upload lên server thì dùng cái này, nó chứa file string svg raw
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = () => {
    const formData = new FormData();
    formData.append("Name", form.getFieldValue("name"));
    formData.append("IsVisible", form.getFieldValue("visible"));
    formData.append("Content", form.getFieldValue("content"));
    formData.append("Type", form.getFieldValue("type"));
    formData.append("URL", form.getFieldValue("url"));
    formData.append("image", fileList[0].originFileObj);
    // console.log(fileList[0]);
    const res = dispatch(createProductAction(formData));
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

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Quản lý sản phẩm</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Thêm sản phẩm</span>
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
            Thêm sản phẩm
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
          label="URL sản phẩm"
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
          label="Logo dịch vụ"
          style={{ fontWeight: "500" }}
          rules={[
            {
              required: true,
              message: "Please upload a logo!",
            },
          ]}
        >
          <Upload
            accept="image/*"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={fileList}
            listType="picture-card"
            className="avatar-uploader"
            onChange={handleChange}
            customRequest={dummyRequest}
            // beforeUpload={(file) => {
            //   const reader = new FileReader();

            //   reader.onload = (e) => {
            //     setLogo(e.target.result);
            //   };
            //   reader.readAsText(file);

            //   // Prevent upload
            //   return false;
            // }}
          >
            {/* {uploadImg < 1 && "+ Upload"} */}
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
        </Form.Item>
        <Form.Item
          valuePropName="visible"
          label="Hiển thị"
          name="visible"
          labelAlign="left"
        >
          <Switch
          //   checked={}
          //   onChange={handleFormItemChange("isVisible")}
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

export default New;
