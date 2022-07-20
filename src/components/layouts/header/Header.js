import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/logoWhite.svg";
import { ReactComponent as Menu } from "../../../assets/GgMenuRight 1.svg";
import { ReactComponent as Close } from "../../../assets/RadixIconsCross2 (2) 1.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [openOverlay, setOpenOverlay] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const navbarItems = [
    { path: "/", page: t("home") },
    { path: "/aboutus", page: t("about") },
    { path: "/products", page: t("product") },
    { path: "/event", page: t("event") },
    { path: "/contact", page: t("contact") },
    { path: "/career", page: t("career") },
  ];

  const setActiveNavbarItem = () => {
    if (activeRoute.length > 0) {
      switch (activeRoute) {
        case "/":
          setActiveItem(0);
          break;
        case "/aboutus":
          setActiveItem(1);
          break;
        case "/products":
          setActiveItem(2);
          break;
        case "/event":
          setActiveItem(3);
          break;
        case "/contact":
          setActiveItem(4);
          break;
        case "/career":
          setActiveItem(5);
          break;
        default:
          break;
      }
    }
  };

  const handlePathChangeOnMobile = (item) => {
    setActiveRoute(item.path);
    setOpenOverlay(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setActiveItem(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    //get location and active route base on url
    let currentURL = window.location.href;
    let endpoint = currentURL.split("/");
    setActiveRoute(endpoint[3]);

    setActiveNavbarItem();
  }, [activeRoute]);

  return (
    <header className="header d-flex justify-content-center align-items-center">
      <div className="header__container container d-flex justify-content-between align-items-center">
        <div
          onClick={handleLogoClick}
          className="header__container__logo d-flex justify-content-center align-items-center"
        >
          <Logo />
        </div>
        <ul className="header__container__navbar d-flex justify-content-between align-items-center">
          {navbarItems.map((item, idx) => (
            <Link
              key={idx}
              onClick={() => idx !== 5 && setActiveRoute(item.path)}
              to={idx !== 5 && item.path}
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
          className="header__overlay-block__close align-self-end"
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
