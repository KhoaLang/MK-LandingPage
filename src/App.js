import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Event from "./components/event/Event";
import "react-multi-carousel/lib/styles.css";
import EventDetail from "./components/eventDetail/EventDetail";
import { AdminLayout } from "./layouts/AdminLayout";
import { ClientLayout } from "./layouts/ClientLayout";
import ManagePost from "./pages/admin/Post/ManagePost";
import NewPost from "./pages/admin/Post/New";
import DetailPost from "./pages/admin/Post/Detail";

import ManageCategories from "./pages/admin/Category/ManageCategories";
import { CategorytNew } from "./pages/admin/Category/New";
import { CatetgorytDetail } from "./pages/admin/Category/Detail";
import { Banner } from "./pages/admin/banner";
import { BannerNew } from "./pages/admin/banner/New";
import { BannerDetail } from "./pages/admin/banner/Detail";
import { Hiring } from "./pages/admin/hirring";
import { CreateHiring } from "./pages/admin/hirring/create";
import { HiringDetail } from "./pages/admin/hirring/detail";

import { Outstanding } from "./pages/admin/outstanding";
import { OutstandingNew } from "./pages/admin/outstanding/New";
import { OutstandingDetail } from "./pages/admin/outstanding/Detail";
import { BackTop, Button, Result } from "antd";
import { Language } from "./pages/admin/language";
import { CreateLanguage } from "./pages/admin/language/create";
import { DetailLanguage } from "./pages/admin/language/detail";
import { CompanyInfo } from "./pages/admin/CompanyInfo";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Parallax } from "rc-scroll-anim";
import { useEffect } from "react";
import CompanyInfoEdit from "./pages/admin/CompanyInfo/Edit";
import SocialMediaEdit from "./pages/admin/SocialMedia/Edit";
import { SocialMedia } from "./pages/admin/SocialMedia";
import SocialMediaNew from "./pages/admin/SocialMedia/New";
import Service from "./pages/admin/Service";
import ServiceNew from "./pages/admin/Service/New";
import ServiceDetail from "./pages/admin/Service/Detail";
import ContactAdmin from "./pages/admin/Contact";
import ContactAdminDetail from "./pages/admin/Contact/Detail";
import { ProductsAdmin } from "./pages/admin/Products";
import NewProductsAdmin from "./pages/admin/Products/New";
import DetailProductsAdmin from "./pages/admin/Products/Detail";
import Project from "./components/project";
import ProjectDetail from "./components/projectDetail";
import Authenticate from "./pages/admin/authenticate";

function App() {
  const navigate = useNavigate();
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <BackTop style={{ right: "40px" }}>
        <div style={style}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
      <Routes>
        <Route path="/" element={<ClientLayout></ClientLayout>}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="service" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="event" element={<Event />} />
          <Route path="event/:id" element={<EventDetail />} />
        </Route>
        <Route path="admin/login" element={<Authenticate />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<ManagePost />} />

          <Route path="categories">
            <Route index element={<ManageCategories />} />
            <Route path="new" element={<CategorytNew />} />
            <Route path="detail/:id" element={<CatetgorytDetail />} />
          </Route>
          <Route path="posts">
            <Route index element={<ManagePost />} />
            <Route path="newpost" element={<NewPost />} />
            <Route path="detail/:id" element={<DetailPost />} />
          </Route>

          <Route path="banners">
            <Route index element={<Banner />} />
            <Route path="new" element={<BannerNew />} />
            <Route path="detail/:id" element={<BannerDetail />} />
          </Route>
          <Route path="hiring">
            <Route index element={<Hiring />} />
            <Route path="new" element={<CreateHiring />} />
            <Route path="detail/:id" element={<HiringDetail />} />
          </Route>
          <Route path="outstanding">
            <Route index element={<Outstanding />} />
            <Route path="new" element={<OutstandingNew />} />
            <Route path="detail/:id" element={<OutstandingDetail />} />
          </Route>
          <Route path="languages">
            <Route index element={<Language />} />
            <Route path="new" element={<CreateLanguage />} />
            <Route path="detail/:id" element={<DetailLanguage />} />
          </Route>
          <Route path="companyinfo">
            <Route index element={<CompanyInfo />} />
            <Route path="edit" element={<CompanyInfoEdit />} />
          </Route>
          <Route path="socialmedia">
            <Route index element={<SocialMedia />} />
            <Route path="detail/:id" element={<SocialMediaEdit />} />
            <Route path="new" element={<SocialMediaNew />} />
          </Route>
          <Route path="service">
            <Route index element={<Service />} />
            <Route path="detail/:id" element={<ServiceDetail />} />
            <Route path="new" element={<ServiceNew />} />
          </Route>
          <Route path="contact">
            <Route index element={<ContactAdmin />} />
            <Route path="detail/:id" element={<ContactAdminDetail />} />
          </Route>
          <Route path="product">
            <Route index element={<ProductsAdmin />} />
            <Route path="detail/:id" element={<DetailProductsAdmin />} />
            <Route path="new" element={<NewProductsAdmin />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Button type="primary" onClick={() => navigate("/")}>
                  Back Home
                </Button>
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
