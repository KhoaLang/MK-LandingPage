import React from "react";
import { URL_IMAGE } from "../../utils/constants";
import { Card, Col, Pagination, Row, Tabs } from "antd";
const { TabPane } = Tabs;

export const CardEvent = ({ item, size, idxItem }) => {
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  const styles = size ? { bacground: "#ffff" } : "";
  return (
    <>
      {item?.Posts?.filter((item1) => item1.isVisible === true).map(
        (item2, idx) => {
          if (idx === 0 && idxItem === 0) {
            return (
              <Col className="gutter-row" span={16}>
                <div className="card-event">
                  <img src={`${URL_IMAGE}${item2.image}`} />
                  <div style={{ styles }} className="content">
                    <p>{item.name}</p>
                    {size ? (
                      <h3> {truncateString(item2.title, 40)}</h3>
                    ) : (
                      <h3>{item2.title}</h3>
                    )}
                    <p>{item2.createdAt}</p>
                  </div>
                </div>
              </Col>
            );
          } else {
            return (
              <Col className="gutter-row" span={8}>
                <div className="card-event">
                  <img src={`${URL_IMAGE}${item2.image}`} />
                  <div style={{ background: "#ffff" }} className="content">
                    <p style={{ color: "#7B7B7B" }}>{item.name}</p>
                    <h3 style={{ color: "#333" }}>
                      {truncateString(item2.title, 25)}
                    </h3>
                    <p style={{ color: "#7B7B7B" }}>{item2.createdAt}</p>
                  </div>
                </div>
              </Col>
            );
          }
        }
      )}
    </>
  );
};
