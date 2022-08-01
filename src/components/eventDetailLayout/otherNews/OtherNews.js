import { Row, Col } from "antd";
import "./otherNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventCard } from "../../layouts/eventCard/EventCard";

const OtherNews = ({ listPost }) => {
  const [listFilteredPost, setListFilteredPost] = useState([]);
  const navigate = useNavigate();
  const randomValueFromArray = () => {
    let almostDone = [];
    for (let i = 0; i < 3; ++i) {
      let randPos = Math.floor(Math.random() * listPost.length);
      if (almostDone.includes(randPos)) {
        --i;
      } else {
        almostDone.push(randPos);
      }
    }
    return [
      listPost[almostDone[0]],
      listPost[almostDone[1]],
      listPost[almostDone[2]],
    ];

    // if (alreadyDone.length === 0) {
    //   for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
    // }
    // var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
    // var indexOfItemInMyArray = alreadyDone[randomValueIndex];
    // alreadyDone.splice(randomValueIndex, 1);
    // return myArray;
  };
  useEffect(() => {
    // console.log(randomValueFromArray(listPost)); //Tối ưu code lọc post khác nhau
    setListFilteredPost(randomValueFromArray());
  }, [listPost]);
  return (
    <section className="other-news">
      <h3>Tin tức khác</h3>
      <Row gutter={[28, 28]}>
        {listFilteredPost.map((item, idx) => (
          <Col onClick={() => navigate(`/event/${item.id}`)} md={8} key={idx}>
            <div className="other-news__card">
              <img
                src={process.env.REACT_APP_BACKEND_BASE_URL + item?.image}
                alt=""
              />
              <div className="other-news__card__content">
                <p>{item?.Category?.name}</p>
                <p>{item?.title}</p>
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
