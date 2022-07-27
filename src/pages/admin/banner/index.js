import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
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
const { Option } = Select;
const cx = classNames.bind(styles);

export const Banner = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { listBanner } = useSelector((state) => state.bannerReducer);
  const { listPage } = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBannerAction());
    dispatch(getAllPageAction);
  }, []);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {};
  const handleVisible = (id, checked) => {
    dispatch(updateBannerAction(id, { isVisible: checked }));
  };

  const data = listBanner?.map((item, idx) => {
    return { ...item, key: item.id, locatedAt: item.Page?.name };
  });

  const columns = [
    {
      title: "Hình",
      dataIndex: "image",
      render: (text) => {
        return (
          <img
            style={{ width: "74px", height: "48px" }}
            src={`https://landing-page-vnplus.herokuapp.com/image/${text}`}
          />
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      render: (text) => {
        return <strong className={cx("title")}>{text}</strong>;
      },
    },
    {
      title: "Vị trí",
      dataIndex: "locatedAt",
    },
    {
      title: "Số Seri",
      dataIndex: "serial",
    },
    {
      title: "Hiển thị",
      dataIndex: "isVisible",
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
      render: (item) => {
        return (
          <div>
            <Popconfirm
              title="Are you sure？"
              onConfirm={() => dispatch(deleteBannerAction(item.id))}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
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
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleChangeSelect = (value) => {
    dispatch(getAllBannerAction(value));
  };
  const handleDeleteArray = async (data) => {
    await Promise.all(data.map(async (id) => dispatch(deleteBannerAction(id))));
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>Quản lý banner</h5>
        <div className={cx("grpBtn")}>
          <Popconfirm
            title="Are you sure？"
            onConfirm={() => handleDeleteArray(selectedRowKeys)}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
            <Button
              style={{
                color: "#C00101",
                borderColor: "currentcolor",
                fontWeight: "bold",
              }}
              size="large">
              <DeleteOutlined />
              Xoá
            </Button>
          </Popconfirm>
          <Button
            onClick={() => navigate("new")}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large">
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
          gap: "10px",
        }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}>
        <Form.Item
          label="Vị trí"
          style={{ fontWeight: "500" }}
          className="w-20"
          name="type">
          <Select
            size={"large"}
            defaultValue=""
            className={cx("upload")}
            onChange={handleChangeSelect}>
            <Option label={"Tất cả"} value={""}>
              Tất Cả
            </Option>
            {listPage?.map((item) => {
              return (
                <Option label={item.name} key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
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
