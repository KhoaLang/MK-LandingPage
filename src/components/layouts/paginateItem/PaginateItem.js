import { Row, Col } from "antd";
import EventCard from "../eventCard/EventCard";
import "./paginateItem.scss";

const PaginateItem = ({ currentItems }) => {
  return (
    <div className="paginate-item">
      <Row gutter={[24, 24]} className="d-flex justify-content-center">
        {currentItems &&
          currentItems.map((item, idx) => (
            <Col md={idx === 0 ? 16 : 8} xs={idx === 0 ? 24 : 22} key={idx}>
              <EventCard
                firstNews={idx === 0 ? true : false}
                image={item.image}
                title={item.title}
                category={item.category}
                date={item.date}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PaginateItem;
