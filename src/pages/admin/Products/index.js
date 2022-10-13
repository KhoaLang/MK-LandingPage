import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./products.module.scss";
import {
  DeleteOutlined,
  PlusOutlined,
  MoreOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { Button, Popconfirm, Popover, Switch, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCompanyInfoAction } from "../../../stores/actions/companyInfoAction";
import { deleteLink } from "../../../stores/actions/socialMediaAction";
import {
  deleteProductAction,
  getAllProductAction,
  updateProductAction,
} from "../../../stores/actions/productAction";
// import { deleteLanguageAction } from "stores/actions/languageAction";
const cx = classNames.bind(styles);

export const ProductsAdmin = () => {
  const { listProducts } = useSelector((state) => state.productReducer);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dimension, setDimension] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const content = (
    <p style={{ width: "500px" }}>
      <span style={{ color: "#1ea6fb" }}>Lưu ý:</span> Nếu muốn sử dụng chức
      năng chuyển đổi ngôn ngữ, bắt buộc phải thiết lập bằng tay ở mục Ngôn ngữ.
      <br />
      <br />
      Nội dung về sản phẩm (thông tin này được thiết lập ban đầu bằng tiếng
      việt) sẽ được lưu lại trên database và mỗi trường thông tin tương ứng sẽ
      có 1 key với tên có cấu trúc là "Tensanpham+ContentKey".
    </p>
  );

  const handleChangeVisibility = (checked, key) => {
    dispatch(updateProductAction(key, { IsVisible: checked }));
  };

  const data =
    listProducts?.length > 0 &&
    listProducts?.map((item, index) => ({
      key: item.id,
      id: index,
      logo: item.Image,
      name: item.Name,
      url: item.URL,
      type: item.Type,
      visible: item.IsVisible,
      content: item.Content,
    }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "type",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      render: (item) => {
        // console.log(item);
        return (
          <img
            src={`${process.env.REACT_APP_BACKEND_BASE_URL}${item}`}
            alt=""
          />
        );
      },
    },
    {
      title: "Url",
      dataIndex: "url",
    },
    {
      title: "Nội dung miêu tả",
      dataIndex: "content",
    },
    {
      title: "Hiển thị",
      dataIndex: "visible",
      render: (item, record) => {
        console.log(item);
        return (
          <Switch
            defaultChecked={item}
            onChange={(checked) => handleChangeVisibility(checked, record.key)}
          />
        );
      },
    },
    {
      title: "Thao tác",
      render: (item) => {
        return (
          <div>
            <Popover
              content={
                <>
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => dispatch(deleteProductAction(item.key))}
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
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
              trigger="click">
              <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
            </Popover>
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
        <h5>
          Quản lý các sản phẩm của công ty
          <span style={{ marginLeft: "10px" }}>
            <Popover
              content={content}
              title={
                <h5 style={{ paddingTop: "10px", color: "#1ea6fb" }}>
                  Về chuyển đổi ngôn ngữ
                </h5>
              }
              placement="bottom">
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
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
            <Button
              style={{
                color: "#C00101",
                borderColor: "currentcolor",
                fontWeight: "bold",
              }}
              disabled={!(selectedRowKeys.length > 1)}
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
            Thêm sản phẩm
          </Button>
        </div>
      </div>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "600",
          paddingLeft: "20px",
          margin: "0",
        }}>
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
