import "./products.scss";
import OurProducts from "../homeLayout/ourProducts/OurProducts";
import OtherService from "../productsLayout/otherService/OtherService";

const Products = () => {
  return (
    <div className="products">
      <OurProducts button={true} />
      <OtherService />
    </div>
  );
};

export default Products;
