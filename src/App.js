import "react-multi-carousel/lib/styles.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
import Event from "./components/event/Event";
import EventDetail from "./components/eventDetail/EventDetail";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import { ClientLayout } from "./layouts/ClientLayout";

import { ArrowUpOutlined } from "@ant-design/icons";
import { BackTop, Button, Result } from "antd";
import { useEffect } from "react";
import Project from "./components/project";
import ProjectDetail from "./components/projectDetail";

function App() {
  const navigate = useNavigate();
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#000",
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
