import { Col, Tabs } from "antd";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LazyImage } from "../LazyImage";
const { TabPane } = Tabs;

export const CardEvent = ({ item, size, idxItem }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
          <div className="card-event" onClick={() => navigate(`${item.id}`)}>
            <LazyImage
              src={`${process.env.REACT_APP_BACKEND_BASE_URL}${item.image}`}
            />
            <div style={{ styles }} className="content">
              <p>{t(item.Category.name)}</p>
              {size ? (
                <h3> {truncateString(item.title, 40)}</h3>
              ) : (
                <h3>{item.title}</h3>
              )}
              <p>{moment(item.createdAt).format("LLLL")}</p>
            </div>
          </div>
        </Col>
      ) : (
        <Col xs={24} lg={8} xl={8} className="gutter-row" span={8}>
          <div className="card-event" onClick={() => navigate(`${item.id}`)}>
            <LazyImage
              src={`${process.env.REACT_APP_BACKEND_BASE_URL}${item.image}`}
            />
            <div style={{ background: "#ffff" }} className="content">
              <p style={{ color: "#7B7B7B" }}>{t(item.Category.name)}</p>
              <h3 style={{ color: "#333" }}>
                {truncateString(item.title, 22)}
              </h3>
              <p style={{ color: "#7B7B7B" }}>
                {moment(item.createdAt).format("LLLL")}
              </p>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};
