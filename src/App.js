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
import ManagePost from "./componentsAdmin/ManagePost";

import { CategorytNew } from "./pages/admin/Category/New";
import { CatetgorytDetail } from "./pages/admin/Category/Detail";
import ManageCategories from "./componentsAdmin/ManageCategories";
import NewPost from "./componentsAdmin/NewPost";
import { Banner } from "./pages/admin/banner";
import { BannerNew } from "./pages/admin/banner/New";
import { BannerDetail } from "./pages/admin/banner/Detail";

function App() {
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
            <Route path="new" element={<NewPost />} />
          </Route>

          <Route path="banners">
            <Route index element={<Banner />} />
            <Route path="new" element={<BannerNew />} />
            <Route path="detail/:id" element={<BannerDetail />} />
          </Route>
          <Route path="hiring" element={<div>bai viet event</div>} />
          <Route path="hots" element={<div>bai viet event</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
