import { Row, Col } from "antd";
import { URL_IMAGE } from "../../../utils/constants";
import EventCard from "../eventCard/EventCard";
import "./paginateItem.scss";

const PaginateItem = ({ currentItems }) => {
  console.log("first",currentItems?.filter((category) => category.isVisible === true)[0].Posts?.filter((category) => category.isVisible === true))
  return (
    <div className="paginate-item">
      <Row gutter={[24, 24]} className="d-flex justify-content-center">
        {currentItems &&
          currentItems?.filter((category) => category.isVisible === true)[0].Posts?.filter((category) => category.isVisible === true).map((item, idx) => (
            <Col md={idx === 0 ? 16 : 8} xs={idx === 0 ? 24 : 22} key={idx}>
              <EventCard
                firstNews={idx === 0 ? true : false}
                image={`${URL_IMAGE}${item.image}`}
                title={item.title}
                category={currentItems.name}
                date={item.createdAt}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PaginateItem;
