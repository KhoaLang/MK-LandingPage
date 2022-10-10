import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./service.module.scss";
import {
  DeleteOutlined,
  PlusOutlined,
  MoreOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { Button, Popconfirm, Popover, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLink } from "../../../stores/actions/socialMediaAction";
import {
  getAllServiceAction,
  deleteService,
} from "../../../stores/actions/serviceAction";

const cx = classNames.bind(styles);

const Service = () => {
  const { listService } = useSelector((state) => state.serviceReducer);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dimension, setDimension] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllServiceAction());
  }, []);

  const data =
    listService?.length > 0 &&
    listService?.map((item, index) => ({
      key: item.id,
      id: index,
      logo: `${process.env.REACT_APP_BACKEND_BASE_URL}${item.Image}`,
      name: item.Name,
      content: item.Content,
      price: item.Price,
    }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Content",
      dataIndex: "content",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      render: (item) => {
        // console.log(item);
        return (
          <img style={{ width: "72px", height: "72px" }} src={item} alt="" />
        );
      },
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
                      onConfirm={() => dispatch(deleteService(item.key))}
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
                  onConfirm={() => deleteService(item.key)}
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
    dispatch(deleteLink(selectedRowKeys));
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>Quản lý các dịch vụ của công ty</h5>
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
          <Button
            onClick={() => navigate("new")}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
          >
            <PlusOutlined />
            Thêm dịch vụ
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

export default Service;
