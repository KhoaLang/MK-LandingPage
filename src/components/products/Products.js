import "./products.scss";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import OtherService from "../productsLayout/otherService/OtherService";
import { useEffect } from "react";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const Products = () => {
  return (
    <div className="products">
      <SmoothScroll />
      <OurProducts button={true} />
      <OtherService />
    </div>
  );
};

export default Products;
