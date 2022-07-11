import "./card.scss";
import { RightOutlined } from "@ant-design/icons";
const Card = (props) => {
  const { image } = props;
  return (
    <div className="card">
      <img src={image} alt="nothing to see" />
      <div className="card__content">
        <p className="card__content__date">28/6/2022</p>
        <p className="card__content__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <span className="card__content__link d-flex align-items-center">
          <a href="#">Xem chi tiết</a>
          <RightOutlined style={{ fontSize: "18px", color: "#1ea6fb" }} />
        </span>
      </div>
    </div>
  );
};

export default Card;
