import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer/Footer";
import Header from "../../components/layouts/header/Header";

export const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
