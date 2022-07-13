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

import { PostNew } from "./pages/admin/Category/New";
import { PostDetail } from "./pages/admin/Category/Detail";
import ManageCategories from "./componentsAdmin/ManageCategories";
import NewPost from "./componentsAdmin/NewPost";


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

          <Route path="categories">
            <Route
              index
              element={
                <>
                  <p>DanhMuc</p>
                </>
              }
            />
            <Route path="new" element={<PostNew />} />
            <Route path="detail/:id" element={<PostDetail />} />
          </Route>
          <Route path="posts">
            <Route index element={<ManagePost />} />
          </Route>

       
         

          <Route path="banners" element={<div>bai viet event</div>} />
          <Route path="hiring" element={<div>bai viet event</div>} />
          <Route path="hots" element={<div>bai viet event</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
