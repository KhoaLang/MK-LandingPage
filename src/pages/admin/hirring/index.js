import React from "react";
import styles from "./Hiring.module.scss";
import classNames from "classnames/bind";

import { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Popconfirm,
  Select,
  Switch,
  Table,
  Popover,
} from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
  QuestionCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBannerAction,
  getAllBannerAction,
  getDetailBannerAction,
  updateBannerAction,
} from "../../../stores/actions/bannerAction";

import {
  deleteHiringAction,
  getAllHiringAction,
  updateHiringAction,
} from "../../../stores/actions/hiringAction";
const { Option } = Select;

const cx = classNames.bind(styles);

export const Hiring = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dimension, setDimension] = useState(window.innerWidth);
  const [workTime, setWorkTime] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { listHiring } = useSelector((state) => state.hiringReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHiringAction());
  }, []);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(getAllHiringAction(values.keyWord, values.type));
  };
  const handleVisible = (id, checked) => {
    dispatch(updateHiringAction(id, { isVisible: checked }));
  };

  //handle screen size change
  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension(window.innerWidth);
    }, 2000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const data = listHiring
    ?.filter((item, idx) =>
      searchKeyword === "" ||
      item.position.toLowerCase().includes(searchKeyword.toLowerCase())
        ? true
        : false
    )
    ?.filter((item, idx) =>
      item.type === workTime || workTime === 0 ? true : false
    )
    ?.map((item, idx) => {
      return { ...item };
    });

  const columns = [
    {
      title: "Vị trí",
      dataIndex: "position",
      // render: (text) => {
      //   return (
      //     <img
      //       style={{ width: "74px", height: "48px" }}
      //       src={`https://landing-page-vnplus.herokuapp.com/image/${text}`}
      //     />
      //   );
      // },
    },
    {
      title: "Mức lương",
      dataIndex: "salary",
      // render: (text) => {
      //   return <strong className={cx("title")}>{text}</strong>;
      // },
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text) => {
        return <div>{text === 1 ? "Fulltime" : "Intern"}</div>;
      },
    },
    {
      title: "Địa điểm",
      dataIndex: "location",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
    },
    {
      title: "Hiển thị",
      dataIndex: "isVisible",
      render: (text, record) => {
        return (
          <Switch
            defaultChecked={text}
            onChange={(checked) => handleVisible(record.id, checked)}
          />
        );
      },
    },
    {
      title: "Thao tác",
      render: (item) => {
        return (
          <div>
            {dimension < 1400 ? (
              <>
                <Popover
                  content={
                    <>
                      <Popconfirm
                        title="Are you sure？"
                        onConfirm={() => dispatch(deleteHiringAction(item.id))}
                        icon={
                          <QuestionCircleOutlined style={{ color: "red" }} />
                        }
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
                          dispatch(getDetailBannerAction(item.id));
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
                  <MoreOutlined
                    style={{ fontSize: "20px", cursor: "pointer" }}
                  />
                </Popover>
              </>
            ) : (
              <>
                <Popconfirm
                  title="Are you sure？"
                  onConfirm={() => dispatch(deleteHiringAction(item.id))}
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
                    dispatch(getDetailBannerAction(item.id));
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

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDeleteArray = async (data) => {
    await Promise.all(data.map(async (id) => dispatch(deleteHiringAction(id))));
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>Tuyển dụng</h5>
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
            Tạo Bài Đăng
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
        <Form.Item label="Tìm kiếm" className="w-20" name="keyWord">
          <Input
            size="large"
            placeholder="Tìm tiêu đề"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            prefix={<SearchOutlined />}
          />
        </Form.Item>
        <Form.Item
          label="Vị trí"
          style={{ fontWeight: "500" }}
          className="w-20"
          name="type"
        >
          <Select
            size={"large"}
            value={workTime}
            onChange={(value) => setWorkTime(value)}
            defaultValue={0}
            className={cx("upload")}
          >
            <Option label={"Tất cả"} value={0}>
              Tất cả
            </Option>
            <Option label={"Fulltime"} value={1}>
              Fulltime
            </Option>
            <Option label={"Intern"} value={2}>
              Intern
            </Option>
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
        rowKey="id"
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
