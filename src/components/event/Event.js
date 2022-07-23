import "./event.scss";
import { useState, useEffect } from "react";
import { Card, Col, Pagination, Row, Tabs } from "antd";
import img1 from "../../assets/Frame 51.png";
import img2 from "../../assets/Frame 54.png";
import img3 from "../../assets/Frame 54 (1).png";
import img4 from "../../assets/Frame 54 (2).png";
import img5 from "../../assets/Frame 54 (3).png";
import PaginateItem from "../layouts/paginateItem/PaginateItem";
import { useTranslation } from "react-i18next";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useDispatch, useSelector } from "react-redux";
import { getAllCatetgoryAction } from "../../stores/actions/categoryAction";
import Meta from "antd/lib/card/Meta";
import { CardEvent } from "../Cart";
import { getAllPostAction } from "../../stores/actions/postAction";
const { TabPane } = Tabs;
const pageSize = 3;
const Event = () => {
  const [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const { data, current, minIndex, maxIndex } = state;
  const dispatch = useDispatch();
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const { listPost } = useSelector((state) => state.postReducer);
  const [currentPage, setCurrentPage] = useState();
  const { t, i18n } = useTranslation();
  console.log("state--------ư-q-ưq-", state);
  useEffect(() => {
    dispatch(getAllCatetgoryAction);
    dispatch(getAllPostAction);
    setState({
      data: listPost?.filter((category) => category.isVisible === true),
      totalPage: listPost.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  }, []);
  const onChange = (item1) => {
    console.log(item1);
  };
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  const handleChange = (page) => {
    console.log("page2wdsad-sad-sa", page);
    setState({
      ...state,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  const handleChangeTab = (item1) => {
    console.log(item1, "item1");
    setState({
      data: item1?.Posts,
      totalPage: item1?.Posts.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  };

  return (
    <section className="event">
      <SmoothScroll />
      <div className="wrapperEvent">
        <h2 className="title">{t("New_Event")}</h2>
        <Tabs size="large"   defaultActiveKey="1" onChange={onChange}>
          <TabPane
          
            onClick={() =>
              handleChangeTab(
                listPost?.filter((category) => category.isVisible === true)
              )
            }
            tab="Tất Cả"
            key="1"
          >
            <Row
              gutter={[
                { xs: 2, sm: 4, md: 10, lg: 16 },
                { xs: 2, sm: 4, md: 10, lg: 16 },
              ]}
            >
              {listCategory
                ?.filter((category) => category.isVisible === true)
                .map((item, idx) => {
                  return <CardEvent item={item} idxItem={idx} />;
                })}
            </Row>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={data.length}
              onChange={handleChange}
              style={{ marginTop: "5rem", textAlign: "center" }}
            />
          </TabPane>
          {listCategory
            ?.filter((category) => category.isVisible === true)
            .map((item1, idx) => {
              return (
                <TabPane
                  onClick={() => handleChangeTab(item1)}
                  tab={item1.name}
                  key={item1.id}
                >
                  <Row
                    gutter={[
                      { xs: 2, sm: 4, md: 10, lg: 16 },
                      { xs: 2, sm: 4, md: 10, lg: 16 },
                    ]}
                  >
                    {[item1].map((item, idx) => {
                      return <CardEvent item={item} key={idx} idxItem={idx} />;
                    })}
                  </Row>
                  <Pagination
                    pageSize={pageSize}
                    current={current}
                    total={data.length}
                    onChange={handleChange}
                    style={{ marginTop: "5rem", textAlign: "center" }}
                  />
                </TabPane>
              );
            })}
        </Tabs>
      </div>
    </section>
  );
};

export default Event;
