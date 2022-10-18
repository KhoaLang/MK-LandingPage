import { Row, Col } from "antd";
import "./otherNews.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/event/Rectangle 503.jpg";
import img2 from "../../../assets/event/Rectangle 503 (1).jpg";
import img3 from "../../../assets/event/Rectangle 503 (2).jpg";
import img4 from "../../../assets/event/Rectangle 503 (3).jpg";

const DATA = [
  {
    id: 1,
    image: img1,
    Category: {
      name: "Category 1",
    },
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 2,
    image: img2,
    Category: {
      name: "Category 1",
    },
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 3,
    image: img3,
    Category: {
      name: "Category 1",
    },
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 4,
    image: img4,
    Category: {
      name: "Category 1",
    },
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
];

const OtherNews = ({ listPost, id }) => {
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
  // useEffect(() => {
  //   // console.log(randomValueFromArray(listPost)); //Tối ưu code lọc post khác nhau
  //   setListFilteredPost(randomValueFromArray());
  // }, [id]);
  return (
    <section className="other-news">
      <h3>Tin tức khác</h3>
      <Row gutter={[48, 48]}>
        {DATA.map((item, idx) => (
          <Col onClick={() => navigate(`/event/${item.id}`)} md={12} key={idx}>
            <div className="other-news__card">
              <img src={item?.image} alt="" />
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
