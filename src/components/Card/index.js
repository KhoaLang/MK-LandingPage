import { Col, Tabs } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { LazyImage } from "../LazyImage";

export const CardEvent = ({ item, size, idxItem }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col xs={24} md={8} lg={8} xl={8} className="gutter-row">
        <div className="card-event" onClick={() => navigate(`${item.id}`)}>
          <LazyImage
            src={`${process.env.REACT_APP_BACKEND_BASE_URL}${item.image}`}
          />
          <div
            style={{ background: "#ffff" }}
            className="content d-flex flex-column"
          >
            <p style={{ color: "#7B7B7B" }}>{item.Category.name}</p>
            <h3 style={{ color: "#333" }}>{item.title}</h3>
            <p className="date" style={{ color: "#7B7B7B" }}>
              {moment(item.createdAt).format("LLLL")}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};
