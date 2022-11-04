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
          <p className="card__content__inner__category">
            {currentPost?.Category?.name}
          </p>
          <p className="card__content__inner__info">{currentPost?.title}</p>
          <p className="card__content__inner__date">
            {moment(currentPost?.createdAt).format("LLLL")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
