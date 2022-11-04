import Services from "../homeLayout/services";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import "./products.scss";

const Products = () => {
  return (
    <div className="products">
      <SmoothScroll />
      <Services isHomePage={false} button={true} />
    </div>
  );
};

export default Products;
