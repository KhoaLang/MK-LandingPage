import "./home.scss";
import Hero from "../homeLayout/hero/Hero";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import Events from "../homeLayout/events/Events";
import About from "../homeLayout/about/About";
import Career from "../homeLayout/career/Career";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Hero />
      <OurProducts button={false} />
      <Events />
      <About />
      <Career />
    </div>
  );
};

export default Home;
