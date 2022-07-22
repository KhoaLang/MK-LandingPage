import React, { useEffect, useState } from "react";
import styles from "./Language.module.scss";
import classNames from "classnames/bind";

import {
  Button,
  DatePicker,
  Form,
  Input,
  Popconfirm,
  Select,
  Switch,
  Table,
} from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBannerAction,
  getAllBannerAction,
  getDetailBannerAction,
  updateBannerAction,
} from "../../../stores/actions/bannerAction";
import { updateCategoryAction } from "../../../stores/actions/categoryAction";
import { getAllPageAction } from "../../../stores/actions/pageAction";
import {
  deleteMomentAction,
  getAllMomentAction,
  updateMomentAction,
} from "../../../stores/actions/momentAction";
import {
  deleteLanguageAction,
  getAllLanguage,
} from "../../../stores/actions/languageAction";
const { Option } = Select;
const cx = classNames.bind(styles);

export const Language = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [filter, setFilter] = useState();
  const { listLanguage } = useSelector((state) => state.languageReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLanguage());
  }, []);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const data = listLanguage.map((item) => {
    return {
      ...item,
      id: item.id,
      Title: item.key,
      value: item.value,
      language: item.language,
      key: item.id,
    };
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Key",
      dataIndex: "Title",
      // render: (text) => {
      //   return <strong className={cx("title")}>{text}</strong>;
      // },
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Value",
      dataIndex: "value",
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
    },

    {
      title: "Thao tác",
      render: (item) => {
        return (
          <div>
            <Popconfirm
              title="Are you sure？"
              onConfirm={() => dispatch(deleteLanguageAction(item.id))}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button shape="circle" size="large" icon={<DeleteOutlined />} />
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
          </div>
        );
      },
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    console.log(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleChangeSelect = (value) => {
    console.log(value);
    setFilter(value);
    // dispatch(getAllMomentAction(value));
  };
  const handleDeleteArray = async (data) => {
    await Promise.all(data.map(async (id) => dispatch(deleteLanguageAction(id))));
  };
  const handleFilter = () => {
    dispatch(getAllLanguage(filter));
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>KHOẢNH KHẮC NỔI BẬT</h5>
        <div className={cx("grpBtn")}>
          <Popconfirm
            title="Are you sure？"
            onConfirm={() => handleDeleteArray(selectedRowKeys)}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <Button
              style={{
                color: "#C00101",
                borderColor: "currentcolor",
                fontWeight: "bold",
              }}
              size="large"
            >
              <DeleteOutlined />
              Xoá
            </Button>
          </Popconfirm>
          <Button
            onClick={() => navigate("new")}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
          >
            <PlusOutlined />
            Thêm Ngôn Ngữ
          </Button>
        </div>
      </div>
      <Form
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "end",
          gap: "10px",
        }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Vị trí"
          style={{ fontWeight: "500" }}
          className="w-20"
          name="type"
        >
          <Select
            size={"large"}
            defaultValue=""
            className={cx("upload")}
            onChange={handleChangeSelect}
          >
            <Option label={"Tất Vả"} value={""}>
              Tất Cả
            </Option>
            <Option label={"Tiếng Việt"} value={"vi"}>
              Tiếng Việt
            </Option>
            <Option label={"Tiếng Anh"} value={"en"}>
              Tiếng Anh
            </Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleFilter}
            size="large"
            type="primary"
            htmlType="submit"
          >
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
