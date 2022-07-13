import "./products.scss";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import OtherService from "../productsLayout/otherService/OtherService";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products">
      <OurProducts button={true} />
      <OtherService />
    </div>
  );
};

export default Products;
