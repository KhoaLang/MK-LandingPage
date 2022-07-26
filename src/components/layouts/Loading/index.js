import { Spin } from "antd";
import "../../../sass/reset.scss";

const Loading = () => {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Spin size="large" />
      <p style={{ color: "#1ea6fb" }}>Loading...</p>
    </div>
  );
};

export default Loading;
