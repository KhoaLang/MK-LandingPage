import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./manageCategories.module.scss";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Select, Switch, Table } from "antd";
import { DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllCatetgoryAction } from "../../../../stores/actions/categoryAction";
const { Option } = Select;
const { RangePicker } = DatePicker;

const cx = classNames.bind(styles);

const ManageCategories = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listCategory } = useSelector((state) => state.categoryReducer);
  console.log("listCategory", listCategory);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  useEffect(() => {
    dispatch(getAllCatetgoryAction());
  }, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleVisible = (id, checked) => {
    console.log("id", id);
    console.log("checked", checked);
  };
  const data = listCategory.map((item, idx) => {
    return { ...item, key: item.id, numberOfArticle: item.Posts.length };
  });

  const columns = [
    {
      title: "Danh mục",
      dataIndex: "name",
      render: (text) => {
        return <p className={cx("title")}>{text}</p>;
      },
    },

    {
      title: "Số bài viết",
      dataIndex: "numberOfArticle",
      render: (text) => {
        return (
          <p style={{ textAlign: "center" }} className={cx("title")}>
            {text}
          </p>
        );
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
        console.log(item);
        return (
          <div>
            <Button shape="circle" size="large" icon={<DeleteOutlined />} />
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
          <Button danger size="large">
            <DeleteOutlined />
            Xoá
          </Button>
          <Button
            onClick={() => navigate("new")}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
          >
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
