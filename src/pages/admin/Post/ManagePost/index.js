import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPostAction,
  deletePostAction,
} from "../../../../stores/actions/postAction";
import styles from "./managePost.module.scss";
import { Button, DatePicker, Form, Input, Select, Switch, Table } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { filter } from "lodash";
const { Option } = Select;
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

const ManagePost = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [categorySelect, setCategorySelect] = useState(-1);
  const [dateSelect, setDateSelect] = useState({ start: "", end: "" });

  const { listPost } = useSelector((state) => state.postReducer);
  const [filteredList, setFilteredList] = useState([...listPost]);
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPostAction());
  }, [dispatch, listPost]);

  useEffect(() => {
    let tempList = listPost
      ?.filter((item, idx) =>
        searchKeyword === "" ||
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
          ? true
          : false
      )
      ?.filter((item) => {
        let date = item.createdAt.slice(0, 10);
        let dateStartSelect = dateSelect?.start;
        let dateEndSelect = dateSelect?.end;

        let itemDay = date.slice(-2);
        let itemMonth = date.slice(5, 7);
        let itemYear = date.slice(0, 4);

        let selectedDayStart = dateStartSelect?.slice(-2);
        let selectedMonthStart = dateStartSelect?.slice(5, 7);
        let selectedYearStart = dateStartSelect?.slice(0, 4);

        let selectedDayEnd = dateEndSelect?.slice(-2);
        let selectedMonthEnd = dateEndSelect?.slice(5, 7);
        let selectedYearEnd = dateEndSelect?.slice(0, 4);

        if (
          (selectedYearStart <= itemYear && itemYear <= selectedYearEnd) ||
          dateStartSelect === ""
        ) {
          if (
            (selectedMonthStart <= itemMonth &&
              itemMonth <= selectedMonthEnd) ||
            dateStartSelect === ""
          ) {
            if (
              (selectedDayStart <= itemDay && itemDay <= selectedDayEnd) ||
              dateStartSelect === ""
            ) {
              console.log("Filter được mà");
              return item;
            }
          }
        }
      });
    // let comparedList = tempList?.map((item) => {
    //   filteredList.forEach((item2) => {
    //     if (item.id === item2.id) return item;
    //   });
    // });
    setFilteredList([...tempList]);
  }, [searchKeyword || dateSelect]);

  // useEffect(() => {
  //   let tempList = listPost?.filter((item) =>
  //     categorySelect === item?.Category.id || categorySelect === -1
  //       ? true
  //       : false
  //   );
  //   let comparedList = tempList?.map((item) => {
  //     filteredList.forEach((item2) => {
  //       if (item.id === item2.id) return item;
  //     });
  //   });
  //   setFilteredList([...comparedList]);
  // }, [categorySelect]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleVisible = (id, checked) => {
    console.log("id", id);
    console.log("checked", checked);
  };
  const data = filteredList?.map((item, idx) => {
    const imgURL = `${process.env.REACT_APP_BACKEND_BASE_URL}${item?.image}`;
    return {
      ...item,
      key: item?.id,
      avatar: imgURL,
      category: item?.Category?.name,
      visible: item?.isVisible,
    };
  });
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
      render: (item) => {
        return (
          <div>
            <Button
              shape="circle"
              size="large"
              onClick={() => dispatch(deletePostAction(item.id))}
              icon={<DeleteOutlined />}
            />
            <Button
              style={{ marginLeft: "20px" }}
              shape="circle"
              size="large"
              type="primary"
              onClick={() => navigate(`detail/${item.id}`)}
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

  const handleNavigateToCreateNewPost = () => {
    let endpoint = window.location.href.slice(-5);
    if (endpoint !== "posts") {
      navigate("posts/newpost");
    } else navigate("newpost");
  };

  const handleCalendarChange = (date, dateString) => {
    setDateSelect({ start: dateString[0], end: dateString[1] });
  };

  return (
    <div className={cx("ManagePost")}>
      <div className={cx("top")}>
        <h5>QUẢN LÝ BÀI VIẾT</h5>
        <div className={cx("grpBtn")}>
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
          <Button
            onClick={handleNavigateToCreateNewPost}
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
          >
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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            size="large"
            placeholder="Tìm tiêu đề"
            prefix={<SearchOutlined />}
          />
        </Form.Item>
        <Form.Item label="Phân loại" className="w-20" name="type">
          <Select
            size="large"
            value={categorySelect}
            onChange={(val) => setCategorySelect(val)}
            defaultValue={-1}
          >
            {[{ id: -1, name: "All category" }, ...listCategory]?.map(
              (item, idx) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              )
            )}
            {/* <Option value="Category1">Category1</Option>
            <Option value="Category2">Category2</Option>
            <Option value="Category3">Category3</Option> */}
          </Select>
        </Form.Item>
        <Form.Item label="Ngày" className="w-20" name="range-date">
          <RangePicker onCalendarChange={handleCalendarChange} size="large" />
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
