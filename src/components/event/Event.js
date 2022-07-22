import "./event.scss";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import img1 from "../../assets/Frame 51.png";
import img2 from "../../assets/Frame 54.png";
import img3 from "../../assets/Frame 54 (1).png";
import img4 from "../../assets/Frame 54 (2).png";
import img5 from "../../assets/Frame 54 (3).png";
import PaginateItem from "../layouts/paginateItem/PaginateItem";
import { useTranslation } from "react-i18next";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const thread = [
  {
    image: img1,
    category: "Category",
    date: "28/6/2022",
    title:
      "Offshore vs. Outsourcing – What’s the Different? What’s suitable to your Business?",
  },
  {
    image: img2,
    category: "Category 1",
    date: "28/6/2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image: img3,
    category: "Category 1",
    date: "28/6/2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image: img4,
    category: "Category 1",
    date: "28/6/2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image: img5,
    category: "Category 1",
    date: "28/6/2022",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

const categoryName = [
  "Tất cả",
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
];

const Event = () => {
  const [currentPage, setCurrentPage] = useState();
  const { t, i18n } = useTranslation();

  return (
    <section className="event d-flex justify-content-center align-items-center">
      <SmoothScroll />
      <div className="event__container container d-flex flex-column align-items-center justify-content-between">
        <h2>{t("New_Event")}</h2>
        <div className="event__container__pagination">
          <ul className="event__container__pagination__category d-flex align-items-center">
            {categoryName.map((item, idx) => (
              <li
                className="event__container__pagination__category__item"
                key={idx}
              >
                <div
                  className={
                    idx === 0
                      ? "event__container__pagination__category__item__inner-border category-active"
                      : "event__container__pagination__category__item__inner-border"
                  }
                >
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="event__container__pagination__main d-flex flex-column justify-content-center align-items-center">
            <PaginateItem currentItems={thread} />
            <Pagination
              current={currentPage}
              onChange={(page) => setCurrentPage(page)}
              style={{ marginTop: "70px" }}
              defaultCurrent={1}
              total={28}
              defaultPageSize={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
