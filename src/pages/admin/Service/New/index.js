import styles from "../service.module.scss";
import classNames from "classnames/bind";
import { Form, Input, Breadcrumb, Button, Upload, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanyInfoAction } from "../../../../stores/actions/companyInfoAction";
import { createLink } from "../../../../stores/actions/socialMediaAction";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { createServiceAction } from "../../../../stores/actions/serviceAction";

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
    formData.append("Include", form.getFieldValue("include"));
    formData.append("Price", form.getFieldValue("price"));
    formData.append("image", fileList[0].originFileObj);
    // console.log(fileList[0]);
    const res = dispatch(createServiceAction(formData));
    if (res !== null) {
      navigate("/admin/service");
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Quản lý dịch vụ</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Thêm dịch vụ</span>
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
            Thêm thông tin
          </Button>
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên dịch vụ"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input the service name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="include"
          label="Đính kèm"
          style={{ fontWeight: "500" }}
          className="w-50"
          //   rules={[
          //     {
          //       required: true,
          //       message: "Please input the service name!",
          //     },
          //   ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Giá dịch vụ"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input the service price!",
            },
          ]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Logo dịch vụ (để chất lượng hiển thị tốt nhất hãy chọn 1 file kích thước 72px x 72px)"
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
            beforeUpload={(file) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                setLogo(e.target.result);
              };
              reader.readAsText(file);

              // Prevent upload
              return false;
            }}
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
          label="Nội dung (ngắn từ 10-60 ký tự, tính cả khoảng trắng)"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input service content!",
            },
            {
              min: 10,
              max: 60,
              message: "Content must be between 10-60 characters",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </section>
  );
};

export default New;
