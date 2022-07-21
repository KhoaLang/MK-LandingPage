import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer/Footer";
import Header from "../../components/layouts/header/Header";
import SmoothScroll from "../../components/smoothScroll/SmoothScroll";

export const ClientLayout = () => {
  return (
    <>
      <SmoothScroll />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
