import { Row, Col } from "antd";
import "./otherNews.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventCard } from "../../layouts/eventCard/EventCard";

const OtherNews = ({ id, postCategoryName }) => {
  const [listFilteredPost, setListFilteredPost] = useState([]);
  const navigate = useNavigate();
  const { listPost } = useSelector((state) => state.postReducer);
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 3; ++i) {
      let randomPos = Math.floor(Math.random() * listPost.length);
      while (temp.includes(listPost[randomPos])) {
        randomPos = Math.floor(Math.random() * listPost.length);
      }
      temp.push(listPost[randomPos]);
    }
    setListFilteredPost([...temp]);
  }, [window.location.href]);
  return (
    <section className="other-news">
      <h3>Tin tức khác</h3>
      <Row gutter={[28, 28]}>
        {listFilteredPost.map((item, idx) => (
          <Col onClick={() => navigate(`/event/${item.id}`)} md={8} key={idx}>
            <div className="other-news__card">
              <img
                src={process.env.REACT_APP_BACKEND_BASE_URL + item.image}
                alt=""
              />
              <div className="other-news__card__content">
                <p>{item.Category.name}</p>
                <p>{item.title}</p>
                <p>28/6/2022</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default OtherNews;
