import "./products.scss";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import OtherService from "../productsLayout/otherService/OtherService";
import { useEffect } from "react";
import { getAllServiceAction } from "../../stores/actions/serviceAction";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServiceAction());
  }, []);
  return (
    <div className="products">
      <SmoothScroll />
      <OurProducts button={true} />
      <OtherService />
    </div>
  );
};

export default Products;
