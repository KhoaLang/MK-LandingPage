import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./manageCategories.module.scss";
import { Button, DatePicker, Form, Input, Select, Switch, Table } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Option } = Select;
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);

const ManageCategories = () => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleVisible = (id, checked) => {
    console.log("id", id);
    console.log("checked", checked);
  };
  const data = [
    {
      key: 1,
      title: "Category 1",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 2,
      title: "Category 2",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 3,
      title: "Category 3",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 4,
      title: "Category 4",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 5,
      title: "Category 5",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 6,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 7,
      serial: 1,
      visible: true,
    },
    {
      key: 8,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 9,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 10,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 11,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 12,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 13,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 14,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 15,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 16,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 17,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 18,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 19,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
    {
      key: 20,
      title: "Lorem Ipsum",
      articleNumber: 2,
      serial: 1,
      visible: true,
    },
  ];
  const columns = [
    {
      title: "Danh mục",
      dataIndex: "title",
      render: (text) => {
        return <p className={cx("title")}>{text}</p>;
      },
    },

    {
      title: "Số bài viết",
      dataIndex: "articleNumber",
      render: (text) => {
        return <p className={cx("title")}>{text}</p>;
      },
    },
    {
      title: "Số seri",
      dataIndex: "serial",
      render: (text) => {
        return <p className={cx("title")}>{text}</p>;
      },
    },
    {
      title: "Hiển thị",
      dataIndex: "visible",
      render: (text, record) => {
        return (
          <Switch
            defaultChecked={text}
            onChange={(checked) => handleVisible(record.key, checked)}
          />
        );
      },
    },
    {
      title: "Thao tác",
      align: "center",
      render: () => {
        return (
          <div>
            <Button shape="circle" size="large" icon={<DeleteOutlined />} />
            <Button
              style={{ marginLeft: "20px" }}
              shape="circle"
              size="large"
              type="primary"
              icon={<EditOutlined />}
            />
          </div>
        );
      },
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className={cx("manageCategorie")}>
      <div className={cx("top")}>
        <h5>QUẢN LÝ DANH MỤC</h5>
        <div className={cx("grpBtn")}>
          <Button danger size="large">
            <DeleteOutlined />
            Xoá
          </Button>
          <Button style={{ marginLeft: "20px" }} type="primary" size="large">
            <PlusOutlined />
            Tạo Bài Viết
          </Button>
        </div>
      </div>
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

export default ManageCategories;
