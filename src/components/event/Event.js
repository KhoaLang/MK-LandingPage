import "./event.scss";
import { useState, useEffect } from "react";
import { Pagination, Row, Tabs } from "antd";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useDispatch, useSelector } from "react-redux";
import { getAllCatetgoryAction } from "../../stores/actions/categoryAction";
import { CardEvent } from "../Card";
import {
  getAllPostAction,
  getFilterPost,
} from "../../stores/actions/postAction";
import { Loading } from "../Loading";
const { TabPane } = Tabs;
const pageSize = 6;
const Event = () => {
  const [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const { data, current, minIndex, maxIndex, totalPage } = state;
  const dispatch = useDispatch();
  const { listCategory } = useSelector((state) => state.categoryReducer);
  const { listPost, isLoading, postFilter } = useSelector(
    (state) => state.postReducer
  );
  useEffect(() => {
    dispatch(getAllCatetgoryAction());
    dispatch(getAllPostAction());
  }, []);
  useEffect(() => {
    setState({
      data: listPost?.filter((category) => category.isVisible === true),
      totalPage: listPost.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
    });
  }, [listPost]);
  const onChange = (key) => {
    if (key === "") {
      dispatch(getAllPostAction(key, setState));
    } else {
      dispatch(getFilterPost(key, setState));
    }
  };

  const handleChange = (page) => {
    setState((prev) => ({
      ...prev,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    }));
  };

  return (
    <section className="event">
      <div className="wrapperEvent">
        <SmoothScroll />
        <h2 className="title">Tin tức</h2>
        <Tabs
          className="tabEvent"
          size="large"
          defaultActiveKey="1"
          onChange={onChange}
        >
          <TabPane tab="All" key="">
            <Row
              gutter={[
                { xs: 2, sm: 4, md: 48, lg: 16, xl: 16 },
                { xs: 16, sm: 32, md: 64, lg: 64, xl: 64, xxl: 64 },
              ]}
            >
              {isLoading ? (
                <Loading style={{ color: "#000" }} />
              ) : (
                <>
                  {listPost
                    ?.filter((category) => category.isVisible === true)
                    .map((item, index) => {
                      return (
                        index >= minIndex &&
                        index < maxIndex && (
                          <CardEvent
                            item={item}
                            key={item.id}
                            idxItem={index}
                          />
                        )
                      );
                    })}
                </>
              )}
            </Row>
            {totalPage > 1 && (
              <Pagination
                defaultCurrent={1}
                pageSize={pageSize}
                current={current || 1}
                total={data.length}
                onChange={handleChange}
                // responsive={true}
                style={{ marginTop: "5rem", textAlign: "center" }}
              />
            )}
          </TabPane>
          {listCategory
            ?.filter((category) => category.isVisible === true)
            .map((item1, idx) => {
              return (
                <TabPane tab={item1.name} key={item1.id}>
                  <Row
                    gutter={[
                      { xs: 2, sm: 4, md: 48, lg: 16, xl: 16 },
                      { xs: 16, sm: 32, md: 64, lg: 64, xl: 64, xxl: 64 },
                    ]}
                  >
                    {isLoading ? (
                      <Loading style={{ color: "#000" }} />
                    ) : (
                      <>
                        {postFilter
                          ?.filter((category) => category.isVisible === true)
                          .map((item, index) => {
                            return (
                              index >= minIndex &&
                              index < maxIndex && (
                                <CardEvent
                                  item={item}
                                  key={item.id}
                                  idxItem={index}
                                />
                              )
                            );
                          })}
                      </>
                    )}
                  </Row>
                  {totalPage > 1 && (
                    <Pagination
                      defaultCurrent={1}
                      pageSize={pageSize}
                      current={current || 1}
                      total={data.length}
                      onChange={handleChange}
                      // responsive={true}
                      style={{ marginTop: "5rem", textAlign: "center" }}
                    />
                  )}
                </TabPane>
              );
            })}
        </Tabs>
      </div>
    </section>
  );
};

export default Event;
