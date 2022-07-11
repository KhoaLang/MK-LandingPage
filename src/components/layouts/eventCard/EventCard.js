import "./eventCard.scss";

const EventCard = (props) => {
  const { image, title, category, date, firstNews } = props;
  return (
    <div className="event-card">
      {firstNews ? (
        <div className="event-card__first-card">
          <img src={image} alt="" />
          <div className="event-card__first-card__main-content">
            <p className="event-card__first-card__main-content__category">
              {category}
            </p>
            <h5 className="event-card__first-card__main-content__title">
              {title}
            </h5>
            <p className="event-card__first-card__main-content__date">{date}</p>
          </div>
        </div>
      ) : (
        <>
          <img src={image} alt="" />
          <div className="event-card__main-content">
            <p className="event-card__main-content__category">{category}</p>
            <h5 className="event-card__main-content__title">{title}</h5>
            <p className="event-card__main-content__date">{date}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default EventCard;
