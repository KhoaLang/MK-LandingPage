import classNames from "classnames/bind";
import { useEffect } from "react";
import styles from "../language/Language.module.scss";

import { EditOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCompanyInfoAction } from "../../../stores/actions/companyInfoAction";
const cx = classNames.bind(styles);

export const CompanyInfo = () => {
  const { companyInfo } = useSelector((state) => state.companyInfoReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const content = (
    <p style={{ width: "500px" }}>
      <span style={{ color: "#1ea6fb" }}>Lưu ý:</span> Nếu muốn sử dụng chức
      năng chuyển đổi ngôn ngữ, bắt buộc phải thiết lập bằng tay ở mục Ngôn ngữ.
      <br />
      <br />
      Tên và Địa chỉ trụ sở (2 trường thông tin được thiết lập ban đầu bằng
      tiếng việt) sẽ được lưu lại trên database và mỗi trường thông tin tương
      ứng sẽ có 1 key tên là CompanyName và address.
    </p>
  );

  useEffect(() => {
    dispatch(getCompanyInfoAction());
  }, []);

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>
          Quản lý thông tin công ty
          <span style={{ marginLeft: "10px" }}>
            <Popover
              content={content}
              title={
                <h5 style={{ paddingTop: "10px", color: "#1ea6fb" }}>
                  Về chuyển đổi ngôn ngữ
                </h5>
              }
              placement="bottom"
            >
              <QuestionCircleOutlined
                style={{ cursor: "pointer", color: "#1ea6fb" }}
              />
            </Popover>
          </span>
        </h5>

        <div className={cx("grpBtn")}>
          <Button
            onClick={() => navigate("edit")}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
          >
            <EditOutlined />
            Sửa thông tin công ty
          </Button>
        </div>
      </div>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "600",
          paddingLeft: "20px",
          margin: "0",
        }}
      >
        Chi tiết
      </p>
      <Form
        style={{
          margin: "20px",
        }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        // form={form}
        // onFinish={onFinish}
      >
        <Form.Item label="Tên" style={{ fontWeight: "500" }} className="w-50">
          <Input value={companyInfo?.Name} disabled={true} />
        </Form.Item>
        <Form.Item
          label="Logo công ty"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          {/* <Input value={companyInfo?.Logo} disabled={true} /> */}
          <div
            className="company-logo"
            dangerouslySetInnerHTML={{ __html: companyInfo?.Logo }}
          ></div>
        </Form.Item>
        <Form.Item
          label="Địa chỉ trụ sở"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input value={companyInfo?.Address} disabled={true} />
        </Form.Item>
        <Form.Item label="Email" style={{ fontWeight: "500" }} className="w-50">
          <Input value={companyInfo?.Email} disabled={true} />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          style={{ fontWeight: "500" }}
          className="w-50"
        >
          <Input value={companyInfo?.PhoneNumber} disabled={true} />
        </Form.Item>
      </Form>
    </div>
  );
};
