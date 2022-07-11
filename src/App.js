import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import AboutUs from "./components/about/AboutUs";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Event from "./components/event/Event";

import "boxicons";
import "react-multi-carousel/lib/styles.css";
import "antd/dist/antd.min.css";
import EventDetail from "./components/eventDetail/EventDetail";
import { AdminLayout } from "./layouts/AdminLayout";
import { ClientLayout } from "./layouts/ClientLayout";

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

        <Route path="admin" element={<AdminLayout></AdminLayout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
