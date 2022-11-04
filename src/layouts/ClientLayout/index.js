import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer/Footer";
import Header from "../../components/layouts/header/Header";

export const ClientLayout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
