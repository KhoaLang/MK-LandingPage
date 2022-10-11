import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./contact.module.scss";

import { Button, Popconfirm, Popover, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteContactAction,
  getAllContactAction,
} from "../../../stores/actions/contactAction";

const cx = classNames.bind(styles);

const Contact = () => {
  const { listContact } = useSelector((state) => state.contactReducer);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dimension, setDimension] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const content = (
    <p style={{ width: "500px" }}>
      <span style={{ color: "#1ea6fb" }}>Lưu ý:</span> Nếu muốn sử dụng chức
      năng chuyển đổi ngôn ngữ, bắt buộc phải thiết lập bằng tay ở mục Ngôn ngữ.
      <br />
      <br />
      Tên dịch vụ và nội dung (2 trường thông tin được thiết lập ban đầu bằng
      tiếng việt) sẽ được lưu lại trên database và mỗi trường thông tin tương
      ứng sẽ có 1 key với tên có cấu trúc là "Dichvu+Key".
    </p>
  );

  useEffect(() => {
    dispatch(getAllContactAction());
  }, []);

  const data =
    listContact?.length > 0 &&
    listContact?.map((item, index) => ({
      key: item.id,
      id: index,
      email: item.Email,
      name: item.Name,
      content: item.Content,
      phoneNumber: item.PhoneNumber,
    }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Full name",
      dataIndex: "name",
    },
    {
      title: "Content",
      dataIndex: "content",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Thao tác",
      render: (item) => {
        return (
          <div>
            {dimension < 1400 ? (
              <Popover
                content={
                  <>
                    <Popconfirm
                      title="Are you sure？"
                      onConfirm={() => dispatch(deleteContactAction(item.key))}
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    >
                      <Button
                        shape="circle"
                        size="large"
                        icon={<DeleteOutlined />}
                      />
                    </Popconfirm>
                    <Button
                      onClick={() => {
                        navigate(`detail/${item.id}`);
                      }}
                      style={{ marginLeft: "20px" }}
                      shape="circle"
                      size="large"
                      type="primary"
                      icon={<EditOutlined />}
                    />
                  </>
                }
                trigger="click"
              >
                <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
              </Popover>
            ) : (
              <>
                <Popconfirm
                  title="Are you sure？"
                  onConfirm={() => dispatch(deleteContactAction(item.key))}
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                >
                  <Button
                    shape="circle"
                    e
                    size="large"
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
                <Button
                  onClick={() => {
                    navigate(`detail/${item.id}`);
                  }}
                  style={{ marginLeft: "20px" }}
                  shape="circle"
                  size="large"
                  type="primary"
                  icon={<EditOutlined />}
                />
              </>
            )}
          </div>
        );
      },
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDeleteArray = () => {
    dispatch(deleteContactAction(selectedRowKeys));
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>
          Quản lý các lượt liên hệ của khách hàng
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
          <Popconfirm
            title="Are you sure？"
            onConfirm={handleDeleteArray}
            disabled={!(selectedRowKeys.length > 1)}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <Button
              style={{
                color: "#C00101",
                borderColor: "currentcolor",
                fontWeight: "bold",
              }}
              disabled={!(selectedRowKeys.length > 1)}
              size="large"
            >
              <DeleteOutlined />
              Xoá
            </Button>
          </Popconfirm>
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
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        style={{ margin: "20px" }}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["1", "5", "10"],
        }}
      />
    </div>
  );
};

export default Contact;
