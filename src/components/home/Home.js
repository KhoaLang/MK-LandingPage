import "./home.scss";
import Services from "../homeLayout/services";
import Events from "../homeLayout/events/Events";
import About from "../homeLayout/about/About";
import { useState } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { Banner } from "../homeLayout/banner/Banner";
import { OverPack } from "rc-scroll-anim";
import Project from "../homeLayout/project";

const Home = () => {
  const [bgOffset, setBgOffset] = useState(null);

  return (
    <OverPack className="home">
      <SmoothScroll />
      <Banner />
      <Services button={true} />
      <Project />
      <Events />
      <About />
    </OverPack>
  );
};

export default Home;
