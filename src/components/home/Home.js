import "./home.scss";
import Hero from "../homeLayout/hero/Hero";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import Events from "../homeLayout/events/Events";
import About from "../homeLayout/about/About";
import Career from "../homeLayout/career/Career";
import { useState } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { Banner } from "../banner/Banner";
import { OverPack } from "rc-scroll-anim";

const Home = () => {
  const [bgOffset, setBgOffset] = useState(null);

  return (
    <OverPack className="home">
      <SmoothScroll setBgOffset={setBgOffset} />
      {/* <Hero /> */}
      <Banner />
      <OurProducts button={false} />
      <Events />
      <About bgOffset={bgOffset} />
      <Career />
    </OverPack>
  );
};

export default Home;
