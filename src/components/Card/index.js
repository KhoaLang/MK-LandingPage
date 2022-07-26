import { URL_IMAGE } from "../../utils/constants";
import { Card, Col, Pagination, Row, Tabs } from "antd";
import { LazyImage } from "../LazyImage";
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
      {idxItem === 0 ? (
        <Col className="gutter-row" xs={24} lg={16} xl={16} span={16}>
          <div className="card-event">
            {/* <img src={`${URL_IMAGE}${item.image}`} /> */}
            <LazyImage src={`${URL_IMAGE}${item.image}`} />
            <div style={{ styles }} className="content">
              <p>{item.Category.name}</p>
              {size ? (
                <h3> {truncateString(item.title, 40)}</h3>
              ) : (
                <h3>{item.title}</h3>
              )}
              <p>{item.createdAt}</p>
            </div>
          </div>
        </Col>
      ) : (
        <Col xs={24} lg={8} xl={8} className="gutter-row" span={8}>
          <div className="card-event">
          <LazyImage src={`${URL_IMAGE}${item.image}`} />
            {/* <img src={`${URL_IMAGE}${item.image}`} /> */}
            <div style={{ background: "#ffff" }} className="content">
              <p style={{ color: "#7B7B7B" }}>{item.Category.name}</p>
              <h3 style={{ color: "#333" }}>
                {truncateString(item.title, 22)}
              </h3>
              <p style={{ color: "#7B7B7B" }}>{item.createdAt}</p>
            </div>
          </div>
        </Col>
      )}
      {/* {item?.Psts?.filter((item1) => item1.isVisible === true).map(
        (item2, idx) => {
          if (idx === 0 && idxItem === 0) {
            return (
              <Col className="gutter-row" xs={24} xl={16} span={16}>
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
              <Col xs={24} xl={8} className="gutter-row" span={8}>
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
      )} */}
    </>
  );
};
