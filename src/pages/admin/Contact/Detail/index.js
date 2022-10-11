import { Breadcrumb, Form, Input } from "antd";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllContactAction } from "../../../../stores/actions/contactAction";
import styles from "../contact.module.scss";

const cx = classNames.bind(styles);

const Detail = () => {
  const { listContact } = useSelector((state) => state.contactReducer);

  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      name: listContact[params.id]?.Name,
      phonenumber: listContact[params.id]?.PhoneNumber,
      email: listContact[params.id]?.Email,
      content: listContact[params.id]?.Content,
    });
  }, [listContact]);

  useEffect(() => {
    dispatch(getAllContactAction());
  }, []);

  return (
    <section className={cx("edit")}>
      <div className={cx("breadcrumb")} style={{ marginBottom: "30px" }}>
        <Breadcrumb style={{ fontSize: "16px", fontWeight: "500" }}>
          <Breadcrumb.Item className={cx("bread")} onClick={() => navigate(-1)}>
            <span style={{ cursor: "pointer" }}>Quản lý tin nhắn</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#1EA6FB" }}>Chi tiết tin nhắn</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Form
        className={cx("edit-form")}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={form}
        disabled={true}
        // onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="name"
          label="Tên người gửi"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phonenumber"
          label="Số điện thoại"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="Nội dung"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </section>
  );
};

export default Detail;
