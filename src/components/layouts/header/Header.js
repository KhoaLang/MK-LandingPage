import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Menu } from "../../../assets/header/burger-2.svg";
import { ReactComponent as Close } from "../../../assets/RadixIconsCross2 (2) 1.svg";
import "./header.scss";

const Header = () => {
  const [openOverlay, setOpenOverlay] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const [activeItem, setActiveItem] = useState(0);
  const { companyInfo } = useSelector((state) => state.companyInfoReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const navbarItems = [
    // { path: "/", page: t("Home") },
    // { path: "/aboutus", page: t("About") },
    // { path: "/products", page: t("Product") },
    // { path: "/event", page: t("Event") },
    // { path: "/contact", page: t("Contact") },
    // { path: "/career", page: t("Career") },
    { path: "/", page: "Trang chủ" },
    { path: "/aboutus", page: "Về chúng tôi" },
    { path: "/project", page: "Dự án" },
    { path: "/service", page: "Dịch vụ" },
    { path: "/event", page: "Tin tức" },
    { path: "/contact", page: "Liên hệ" },
  ];

  const setActiveNavbarItem = () => {
    const path = location.pathname;
    // console.log(path.split("/"));
    switch (path.split("/")[1]) {
      case "":
        setActiveItem(0);
        break;
      case "aboutus":
        setActiveItem(1);
        break;
      case "project":
        setActiveItem(2);
        break;
      case "service":
        setActiveItem(3);
        break;
      case "event":
        setActiveItem(4);
        break;
      case "contact":
        setActiveItem(5);
        break;
      default:
        break;
    }
  };

  const handlePathChangeOnMobile = (item) => {
    // setActiveRoute(item.path);
    setOpenOverlay(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    // setActiveItem(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setActiveNavbarItem();
  }, [location]);

  return (
    <header className="header d-flex justify-content-center align-items-center">
      <div className="header__container container d-flex justify-content-between align-items-center">
        <div
          onClick={handleLogoClick}
          className="header__container__logo d-flex justify-content-center align-items-center"
          // dangerouslySetInnerHTML={{ __html: companyInfo?.Logo }}
        >
          <p>Logo</p>
        </div>
        <ul className="header__container__navbar d-flex justify-content-between align-items-center">
          {navbarItems.map((item, idx) => (
            <Link
              key={idx}
              // onClick={() => setActiveRoute(item.path)}
              to={item.path}
            >
              <li
                className={
                  activeItem === idx
                    ? "header__container__navbar__item navbar-item-active"
                    : "header__container__navbar__item"
                }
              >
                {item.page}
              </li>
            </Link>
          ))}
        </ul>
        <div
          className="header__container__navbar-burger"
          onClick={() => setOpenOverlay(true)}
        >
          <Menu />
        </div>
      </div>
      <div
        className={
          openOverlay
            ? "header__overlay-block d-flex flex-column"
            : "header__overlay"
        }
      >
        <div
          onClick={() => setOpenOverlay(false)}
          className="header__overlay-block__close"
        >
          <Close />
        </div>
        <ul className="header__overlay-block__navbar d-flex flex-column justify-content-center align-items-center">
          {navbarItems.map((item, idx) => (
            <Link
              key={idx}
              onClick={() => handlePathChangeOnMobile(item)}
              to={item.path}
            >
              <li
                className={
                  activeItem === idx
                    ? "header__overlay-block__navbar__item navbar-item-active"
                    : "header__overlay-block__navbar__item"
                }
              >
                {item.page}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
