import "./hero.scss";
import { useState } from "react";
import { useRef } from "react";
const Hero = () => {
  return (
    <section className="hero d-flex justify-content-center align-items-center">
      <div className="hero__container">
        <h1>Mang đến những trải nghiệm mới mẻ</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odio
          quo eveniet voluptatum aspernatur deleniti quisquam blanditiis
        </p>
      </div>
    </section>
  );
};

export default Hero;
