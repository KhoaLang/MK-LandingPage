import styles from "./edit.module.scss";
import classNames from "classnames/bind";
import { Form, Input, Breadcrumb, Button, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createCompanyInfoAction,
  getCompanyInfoAction,
  updateCompanyInfoAction,
} from "../../../../stores/actions/companyInfoAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

const Edit = () => {
  const [fileList, setFileList] = useState([]);
  const [logo, setLogo] = useState(""); //upload lên server thì dùng cái này, nó chứa file string svg raw
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { companyInfo } = useSelector((state) => state.companyInfoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyInfoAction());
  }, []);

  const onFinish = () => {
    // console.log(form.getFieldValue("logo"));
    let res;
    if (!companyInfo?.id) {
      res = dispatch(
        createCompanyInfoAction({
          Logo: logo,
          Name: form.getFieldValue("name"),
          Address: form.getFieldValue("address"),
          Email: form.getFieldValue("email"),
          PhoneNumber: form.getFieldValue("phonenumber"),
        })
      );
    } else {
      res = dispatch(
        updateCompanyInfoAction({
          Logo: logo,
          Name: form.getFieldValue("name"),
          Address: form.getFieldValue("address"),
          Email: form.getFieldValue("email"),
          PhoneNumber: form.getFieldValue("phonenumber"),
        })
      );
    }
    if (res !== null) {
      navigate("/admin/companyInfo");
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  useEffect(() => {
    form.setFieldsValue({
      name: companyInfo?.Name,
      logo: companyInfo?.Logo,
      address: companyInfo?.Address,
      email: companyInfo?.Email,
      phonenumber: companyInfo?.PhoneNumber,
    });
  }, [companyInfo]);

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Thông tin công ty</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Chỉnh sửa thông tin</span>
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
            offset: 20,
          }}
        >
          <Button className={cx("edit-btn")} type="primary" htmlType="submit">
            <PlusOutlined />
            Chỉnh sửa thông tin
          </Button>
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên công ty"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your company name!",
            },
          ]}
        >
          <Input value={companyInfo?.Name} />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Logo công ty (để chất lượng hiển thị tốt nhất hãy chọn 1 file .svg, kích thước chuẩn 140px x 28px)"
          style={{ fontWeight: "500" }}
          rules={[
            {
              required: true,
              message: "Please upload a logo for your company!",
            },
          ]}
        >
          <Upload
            accept=".svg"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={fileList}
            listType="picture-card"
            className="avatar-uploader"
            onChange={handleChange}
            style={{ display: "block", width: "fit-content" }}
            beforeUpload={(file) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                setLogo(e.target.result);
                form.setFieldsValue({ logo: "svg" });
              };
              reader.readAsText(file);

              // Prevent upload
              return false;
            }}
          >
            {/* {uploadImg < 1 && "+ Upload"} */}
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
          {companyInfo?.Logo?.length > 0 && logo.length === 0 && (
            <span
              className={cx("company-logo")}
              dangerouslySetInnerHTML={{ __html: companyInfo?.Logo }}
            ></span>
          )}
        </Form.Item>
        <Form.Item
          name="address"
          label="Địa chỉ trụ sở"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your company address!",
            },
          ]}
        >
          <Input value={companyInfo?.Address} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your company contact email!",
            },
          ]}
        >
          <Input value={companyInfo?.Email} />
        </Form.Item>
        <Form.Item
          name="phonenumber"
          label="Số điện thoại"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your company phone number!",
            },
          ]}
        >
          <Input value={companyInfo?.PhoneNumber} />
        </Form.Item>
      </Form>
    </section>
  );
};

export default Edit;
