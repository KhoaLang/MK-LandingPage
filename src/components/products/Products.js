import "./products.scss";
import Services from "../homeLayout/services";
import { useEffect } from "react";
import { getAllServiceAction } from "../../stores/actions/serviceAction";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import { useDispatch } from "react-redux";

const Products = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllServiceAction());
  // }, []);
  return (
    <div className="products">
      <SmoothScroll />
      <Services isHomePage={false} button={true} />
    </div>
  );
};

export default Products;
