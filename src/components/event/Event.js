import "./event.scss";
import { useState, useEffect } from "react";
import { Pagination, Row, Tabs } from "antd";
import { useTranslation } from "react-i18next";
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
const pageSize = 5;
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
  const { t, i18n } = useTranslation();
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
      <SmoothScroll />
      <div className="wrapperEvent">
        <h2 className="title">{t("New_Event")}</h2>
        <Tabs
          className="tabEvent"
          size="large"
          defaultActiveKey="1"
          onChange={onChange}
        >
          <TabPane tab={t("All")} key="">
            <Row
              gutter={[
                { xs: 2, sm: 4, md: 10, lg: 16 },
                { xs: 2, sm: 4, md: 10, lg: 16 },
              ]}
            >
              {isLoading ? (
                <Loading />
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
                current={current}
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
                <TabPane
                  // onClick={() => handleChangeTab(item1)}
                  tab={item1.name}
                  key={item1.id}
                >
                  <Row
                    gutter={[
                      { xs: 2, sm: 4, md: 10, lg: 16 },
                      { xs: 2, sm: 4, md: 10, lg: 16 },
                    ]}
                  >
                    {isLoading ? (
                      <Loading />
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
                      current={current}
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
