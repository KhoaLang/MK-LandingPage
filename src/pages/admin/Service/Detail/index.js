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
import {
  createServiceAction,
  updateServiceAction,
  getAllServiceAction,
} from "../../../../stores/actions/serviceAction";

const cx = classNames.bind(styles);

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const Detail = () => {
  const { listService } = useSelector((state) => state.serviceReducer);

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
    formData.append("Include", form.getFieldValue("include"));
    formData.append("Price", form.getFieldValue("price"));
    formData.append("image", fileList[0].originFileObj);
    const res = dispatch(
      updateServiceAction(listService[params.id].id, formData)
    );
    if (res !== null) {
      navigate("/admin/service");
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
      name: listService[params.id]?.Name,
      logo: listService[params.id]?.Image,
      price: listService[params.id]?.Price,
      content: listService[params.id]?.Content,
      visible: listService[params.id]?.IsVisible,
      include: listService[params.id]?.Include,
    });
  }, [listService]);

  useEffect(() => {
    dispatch(getAllServiceAction());
  }, []);

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
        }}>
        <Form.Item
          wrapperCol={{
            offset: 21,
          }}>
          <Button className={cx("edit-btn")} type="primary" htmlType="submit">
            <PlusOutlined />
            Sửa thông tin
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
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="include"
          label="Đính kèm"
          style={{ fontWeight: "500" }}
          className="w-50">
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
          ]}>
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Logo dịch vụ (để chất lượng hiển thị tốt nhất hãy chọn 1 file kích thước 72px x 72px)"
          style={{ fontWeight: "500" }}
          rules={[
            {
              required: true,
              message: "Please upload an image!",
            },
          ]}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={fileList}
            listType="picture-card"
            className="avatar-uploader"
            onChange={handleChange}
            customRequest={dummyRequest}>
            {/* {fileList.length < 1 && "+ Upload"} */}
            {fileList.length === 0 && (
              <img
                src={`${process.env.REACT_APP_BACKEND_BASE_URL}${
                  listService[params.id]?.Image
                }`}
                alt=""
              />
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          valuePropName="visible"
          label="Hiển thị"
          name="visible"
          labelAlign="left">
          <Switch
            defaultChecked={listService[params.id]?.IsVisible}
            // onChange={handleFormItemChange("isVisible")}
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
          ]}>
          <Input />
        </Form.Item>
      </Form>
    </section>
  );
};

export default Detail;
