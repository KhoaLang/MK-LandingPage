import { Routes, Route } from "react-router-dom";
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

import ManageCategories from "./pages/admin/Category/ManageCategories";
import NewPost from "./pages/admin/Post/New";
import { CategorytNew } from "./pages/admin/Category/New";
import { CatetgorytDetail } from "./pages/admin/Category/Detail";
import { Banner } from "./pages/admin/banner";
import { BannerNew } from "./pages/admin/banner/New";
import { BannerDetail } from "./pages/admin/banner/Detail";
import { Hiring } from "./pages/admin/hirring";
import { CreateHiring } from "./pages/admin/hirring/create";
import { HiringDetail } from "./pages/admin/hirring/detail";
import { Suspense, useEffect } from "react";


import Scrollbar from "smooth-scrollbar";

function App() {
  // useEffect(() => {
  //   Scrollbar.init(document.querySelector(".App"), {
  //     damping: 0.1,
  //     thumbMinSize: 20,
  //     renderByPixels: true,
  //     alwaysShowTracks: false,
  //     continuousScrolling: false,
  //   });
  // }, []);


  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<ClientLayout></ClientLayout>}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="event" element={<Event />} />
            <Route path="event/:id" element={<EventDetail />} />
          </Route>
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
          </Route>
        </Routes>
    </div>
  );
}

export default App;
