import "./card.scss";
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
          <i
            className="bx bx-chevron-right"
            style={{ fontSize: "20px", color: "#1ea6fb" }}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
