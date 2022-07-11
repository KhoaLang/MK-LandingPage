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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="event" element={<Event />} />
        <Route path="event/:id" element={<EventDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
