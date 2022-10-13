import styles from "../socialMedia.module.scss";
import classNames from "classnames/bind";
import { Form, Input, Breadcrumb, Button, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanyInfoAction } from "../../../../stores/actions/companyInfoAction";
import { createLink } from "../../../../stores/actions/socialMediaAction";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

const New = () => {
  const [fileList, setFileList] = useState([]);
  const [logo, setLogo] = useState(""); //upload lên server thì dùng cái này, nó chứa file string svg raw
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { companyInfo } = useSelector((state) => state.companyInfoReducer);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Object.keys(companyInfo.id).length) {
      dispatch(getCompanyInfoAction());
    }
  }, []);

  const onFinish = () => {
    const res = dispatch(
      createLink(
        {
          Icon: logo,
          Title: form.getFieldValue("name"),
          URL: form.getFieldValue("url"),
        },
        navigate
      )
    );
    if (res !== null) {
      navigate("/admin/socialmedia");
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
  };

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Quản lý mạng xã hội</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Thêm thông tin mạng xã hội</span>
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
            Thêm thông tin
          </Button>
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên trang mạng xã hội"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your the social media name!",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="logo"
          label="Logo mạng xã hội (để chất lượng hiển thị tốt nhất hãy chọn 1 file .svg)"
          style={{ fontWeight: "500" }}
          rules={[
            {
              required: true,
              message: "Please upload a logo!",
            },
          ]}>
          <Upload
            accept=".svg"
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
            }}>
            {/* {uploadImg < 1 && "+ Upload"} */}
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
        </Form.Item>
        <Form.Item
          name="url"
          label="URL"
          style={{ fontWeight: "500" }}
          className="w-50"
          rules={[
            {
              required: true,
              message: "Please input your company social media url!",
              // pattern:
              //   /^((https?|http):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
            },
          ]}>
          <Input />
        </Form.Item>
      </Form>
    </section>
  );
};

export default New;
