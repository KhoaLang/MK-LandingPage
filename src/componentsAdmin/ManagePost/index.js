import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./managePost.module.scss";
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

const ManagePost = () => {
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
      avatar: "https://picsum.photos/200/300",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      ",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 2,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 3,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 4,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 5,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 6,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 7,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 8,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 9,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 10,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 11,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 12,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 13,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 14,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 15,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 16,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 17,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 18,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 19,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
    {
      key: 20,
      avatar: "https://picsum.photos/200/300",
      title: "Lorem Ipsum",
      category: 1,
      createdAt: "30/2/2022",
      visible: true,
    },
  ];
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (text) => {
        return <img style={{ width: "74px", height: "48px" }} src={text} />;
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      render: (text) => {
        return <strong className={cx("title")}>{text}</strong>;
      },
    },
    {
      title: "Danh mục",
      dataIndex: "category",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
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
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>QUẢN LÝ BÀI VIẾT</h5>
        <div className={cx("grpBtn")}>
          <Button style={{ color: "#C00101", borderColor:"currentcolor", fontWeight:"bold" }} size="large">
            <DeleteOutlined />
            Xoá
          </Button>
          <Button style={{ marginLeft: "20px" }} type="primary" size="large">
            <PlusOutlined />
            Tạo Bài Viết
          </Button>
        </div>
      </div>
      <Form
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item label="Tìm kiếm" className="w-20" name="title">
          <Input
            size="large"
            placeholder="Tìm tiêu đề"
            prefix={<SearchOutlined />}
          />
        </Form.Item>
        <Form.Item label="Phân loại" className="w-20" name="type">
          <Select size="large" defaultValue="">
            <Option value="">Tất cả</Option>
            <Option value="Category1">Category1</Option>
            <Option value="Category2">Category2</Option>
            <Option value="Category3">Category3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ngày" className="w-20" name="range-date">
          <RangePicker size="large" />
        </Form.Item>
        <Form.Item label="Xếp theo" className="w-20">
          <Select size="large" defaultValue="" name="sort">
            <Option value="">Tất cả</Option>
            <Option value="Category1">Mới nhất</Option>
            <Option value="Category2">Cũ nhất</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Tìm
          </Button>
        </Form.Item>
      </Form>
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

export default ManagePost;
