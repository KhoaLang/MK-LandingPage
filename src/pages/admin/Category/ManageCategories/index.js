import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./manageCategories.module.scss";
import { useNavigate } from "react-router-dom";
import { Button, Popconfirm, Select, Switch, Table } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  // getAllCatetgoryAction,
  updateCategoryAction,
} from "../../../../stores/actions/categoryAction";
const { Option } = Select;

const cx = classNames.bind(styles);

const ManageCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listCategory } = useSelector((state) => state.categoryReducer);
  // const { isLoading } = useSelector((state) => state.loadingReducer);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // useEffect(() => {
  //   dispatch(getAllCatetgoryAction());
  // }, [dispatch]);

  const handleVisible = (id, checked) => {
    dispatch(updateCategoryAction(id, { isVisible: checked }));
  };
  const handleDeleteArray = async (data) => {
    await Promise.all(data.map(async (id) => dispatch(deleteCategory(id))));
  };
  const data = listCategory?.map((item, idx) => {
    return { ...item, key: item.id, numberOfArticle: item.Posts?.length };
  });

  const columns = [
    {
      title: "Danh mục",
      dataIndex: "name",
      // render: (text) => {
      //   return <p className={cx("title")}>{text}</p>;
      // },
    },

    {
      title: "Số bài viết",
      dataIndex: "numberOfArticle",
      // render: (text) => {
      //   return (
      //     <p style={{ textAlign: "center" }} className={cx("title")}>
      //       {text}
      //     </p>
      //   );
      // },
    },
    {
      title: "Số seri",
      dataIndex: "serial",
      // render: (text) => {
      //   return <p className={cx("title")}>{text}</p>;
      // },
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
      align: "center",
      render: (item) => {
        return (
          <div>
            <Popconfirm
              title="Are you sure？"
              onConfirm={() => dispatch(deleteCategory(item.id))}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}>
              <Button shape="circle" size="large" icon={<DeleteOutlined />} />
            </Popconfirm>
            <Button
              onClick={() => navigate(`detail/${item.id}`)}
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
            Tạo danh mục
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
