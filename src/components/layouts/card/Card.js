import { RightOutlined } from "@ant-design/icons";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./card.scss";

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
          src={`${process.env.REACT_APP_BACKEND_BASE_URL}${currentPost?.image}`}
          alt="nothing to see"
        />
      </div>
      <div className="card__content d-flex justify-content-center align-items-center">
        <div className="card__content__inner">
          {/* <p className="card__content__category">{currentPost?.category}</p> */}
          <p className="card__content__inner__category">Category 1</p>
          <p className="card__content__inner__info">{currentPost?.title}</p>
          <p className="card__content__inner__date">
            {moment(currentPost?.createdAt).format("LLLL")}
          </p>
        </div>
      </div>
      {/* <span className="card__link d-flex align-items-center">
        <a href="#">Xem chi tiết</a>
        <RightOutlined style={{ fontSize: "18px", color: "#1ea6fb" }} />
      </span> */}
    </div>
  );
};

export default Card;
