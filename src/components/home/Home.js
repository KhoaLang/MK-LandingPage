import "./home.scss";
import Hero from "../homeLayout/hero/Hero";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import Events from "../homeLayout/events/Events";
import About from "../homeLayout/about/About";
import Career from "../homeLayout/career/Career";
import { useState } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";
// import Scrollbar from "react-smooth-scrollbar";
// import { gsap, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  //Scroll animation (đừng xóa)
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".fadeAndReLocateAnimate",
  //     {
  //       y: -100,
  //       autoAlpha: 0,
  //       scrollTrigger: {
  //         trigger: ".fadeAndReLocateAnimate",
  //       },
  //     },
  //     {
  //       y: 0,
  //       autoAlpha: 1,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: ".fadeAndReLocateAnimate",
  //       },
  //     }
  //   );
  // }, []);
  const [bgOffset, setBgOffset] = useState(null);

  return (
    <div className="home">
      <SmoothScroll setBgOffset={setBgOffset} />
      <Hero />
      <OurProducts button={false} />
      <Events />
      <About bgOffset={bgOffset} />
      <Career />
    </div>
  );
};

export default Home;
