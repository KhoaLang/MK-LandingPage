import { productService } from "../../services/ProductsService";
import { openNotification } from "../../utils/Notification";

export const getAllProductAction = () => {
  return async (dispatch) => {
    // console.log("trả ve ne ");
    try {
      const { data } = await productService.getAllProduct();
      dispatch({ type: "GET_ALL_PRODUCTS", data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProductAction = (id, dataForm) => {
  return async (dispatch) => {
    try {
      const data = await productService.updateProduct(id, dataForm);
      console.log("dâttatatat", data);

      dispatch(getAllProductAction());
      openNotification("success", "Update product success!");
    } catch (error) {
      console.log(error);
      openNotification("error", "Update product failed!");
    }
  };
};
export const createProductAction = (dataForm) => {
  return async (dispatch) => {
    try {
      const data = await productService.createProduct(dataForm);
      if (!data.success) {
        return null;
      }

      dispatch(getAllProductAction());
      openNotification("success", "Create product success!");
    } catch (error) {
      console.log(error);
      openNotification("error", "Create product failed!");
    }
  };
};
export const deleteProductAction = (id) => {
  return async (dispatch) => {
    try {
      await productService.deteleProduct(id);
      dispatch(getAllProductAction());
      openNotification("success", "Delete product success!");
    } catch (error) {
      console.log(error);
      openNotification("error", "Delete product failed!");
    }
  };
};
