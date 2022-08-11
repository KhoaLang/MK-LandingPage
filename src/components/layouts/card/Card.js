import "./card.scss";
import { RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import { DOMAIN } from "../../../utils/constants";

const Card = (props) => {
  const [currentPost, setCurrentPost] = useState({});
  const { id } = props;
  const { listPost } = useSelector((state) => state.postReducer);
  useEffect(() => {
    let temp = listPost.filter((item) => item.id === id);
    setCurrentPost(temp[0]);
  }, []);
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          src={`${DOMAIN}${process.env.REACT_APP_BACKEND_BASE_URL}${currentPost?.image}`}
          alt="nothing to see"
        />
      </div>
      <div className="card__content">
        <p className="card__content__date">
          {moment(currentPost?.createdAt).format("LLLL")}
        </p>
        <p className="card__content__info">{currentPost?.title}</p>
      </div>{" "}
      <span className="card__link d-flex align-items-center">
        <a href="#">Xem chi tiết</a>
        <RightOutlined style={{ fontSize: "18px", color: "#1ea6fb" }} />
      </span>
    </div>
  );
};

export default Card;
