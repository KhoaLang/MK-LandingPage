import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer/Footer";
import Header from "../../components/layouts/header/Header";
import { getCompanyInfoAction } from "../../stores/actions/companyInfoAction";

export const ClientLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyInfoAction());
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
